const filterPenderConfig = { serverId: 4706, active: true };

const filterPenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_4706() {
    return filterPenderConfig.active ? "OK" : "ERR";
}

console.log("Module filterPender loaded successfully.");