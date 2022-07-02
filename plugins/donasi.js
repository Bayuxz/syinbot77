let handler = async m => m.reply(`
╭─「 Donasi • Saweria 」
│ •  https://saweria.co/BayuFM
│ •  [-]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
