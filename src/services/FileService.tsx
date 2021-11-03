import http from "../http/http-client";

const uploadFile = async (file: File): Promise<any> => {
  let formData = new FormData();
  formData.append("file", file);

  return http.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default { uploadFile };
