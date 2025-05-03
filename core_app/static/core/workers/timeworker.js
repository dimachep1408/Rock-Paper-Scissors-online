self.onmessage = function (event) {
    count = event.data
    console.log(event.data)
    while (true) {
        console.log("egmk")
        setTimeout(() => {
            self.postMessage(count)
            count--
        }, 1);
        if (count <= 0) {
            break
        }

    }
}