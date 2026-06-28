export const CLOUD_NAME = "dbjdq8ztb";
export const API_KEY = "968965344666235";
export const DEFAULT_UNSIGNED_UPLOAD_PRESET = "ml_default";

export const CLOUDINARY_CONFIG = {
  CLOUD_NAME,
  API_KEY,
  DEFAULT_UNSIGNED_UPLOAD_PRESET,
  VIDEO_UPLOAD_URL: `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`,
} as const;

export type CloudinaryVideoUploadOptions = {
  file: File;
  uploadPreset?: string;
  folder?: string;
  publicId?: string;
  tags?: string[];
  context?: Record<string, string>;
  signal?: AbortSignal;
};

export type CloudinaryVideoUploadResult = {
  asset_id: string;
  public_id: string;
  version: number;
  resource_type: "video";
  format: string;
  bytes: number;
  width: number;
  height: number;
  duration: number;
  secure_url: string;
  url: string;
  original_filename: string;
  [key: string]: unknown;
};

type CloudinaryErrorResponse = {
  error?: {
    message?: string;
  };
};

function toCloudinaryContext(context?: Record<string, string>) {
  if (!context) return undefined;
  const pairs = Object.entries(context)
    .filter(([, value]) => value !== "")
    .map(([key, value]) => `${key}=${value}`);
  return pairs.length > 0 ? pairs.join("|") : undefined;
}

export async function uploadVideoUnsigned({
  file,
  uploadPreset = DEFAULT_UNSIGNED_UPLOAD_PRESET,
  folder,
  publicId,
  tags,
  context,
  signal,
}: CloudinaryVideoUploadOptions): Promise<CloudinaryVideoUploadResult> {
  if (!(file instanceof File)) {
    throw new Error("A valid video file is required.");
  }

  if (file.type && !file.type.startsWith("video/")) {
    throw new Error("Only video files can be uploaded with uploadVideoUnsigned().");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  if (folder) formData.append("folder", folder);
  if (publicId) formData.append("public_id", publicId);
  if (tags?.length) formData.append("tags", tags.join(","));

  const cloudinaryContext = toCloudinaryContext(context);
  if (cloudinaryContext) formData.append("context", cloudinaryContext);

  const response = await fetch(CLOUDINARY_CONFIG.VIDEO_UPLOAD_URL, {
    method: "POST",
    body: formData,
    signal,
  });

  const payload = (await response.json()) as
    | CloudinaryVideoUploadResult
    | CloudinaryErrorResponse;

  if (!response.ok) {
    const errorPayload = payload as CloudinaryErrorResponse;
    throw new Error(errorPayload.error?.message || "Cloudinary video upload failed.");
  }

  return payload as CloudinaryVideoUploadResult;
}
