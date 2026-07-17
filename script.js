window.electron.updater.onStatus((data) => {

    console.log(data);

    const statusElement = document.getElementById("update-status");

    if (data.status === "checking") {
        statusElement.innerText = "Checking for updates...";
    }

    if (data.status === "available") {
        statusElement.innerText =
            `New version ${data.version} available`;
    }

    if (data.status === "downloading") {
        statusElement.innerText =
            `Downloading ${data.percent}%`;
    }

    if (data.status === "downloaded") {
        statusElement.innerText =
            "Update ready. Restart application";
    }

    if (data.status === "error") {
        statusElement.innerText =
            data.message;
    }

});