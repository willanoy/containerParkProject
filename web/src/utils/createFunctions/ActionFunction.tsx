export const download_file = (name_file:string,file_link:string) => {
    let downloadLink = document.createElement("a");
    downloadLink.download = `${name_file}.{.${file_link.split(".").pop()}`;
    downloadLink.href =file_link;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };