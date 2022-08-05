navigator.serial.addEventListener('connect', (N) => {

navigator.serial.addEventListener('disconnect', (N) => {

navigator.serial.getPorts().then((ports) => {



 }}}
       
        try {
          const commandlist = content;
          const commandSplit = commandlist.split(" ")
          const command = commandSplit.slice(-1);
          const computerText = `${command}@`;
          await writer.write(enc.encode(computerText));
        } catch (N) {
          console.log(N);
        }



    async function onConnectUsb() {
      try {
        const requestOptions = {
          filters: [{ usbVendorId: 0x2341 }],
        };
        port = await navigator.serial.requestPort(requestOptions);
        await port.open({ baudRate: 115200 });
        writer = port.writable.getWriter();
        isConnectted = true;
      } catch (N) {
        console.log("err", N;
      }
    }