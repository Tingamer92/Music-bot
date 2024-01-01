module.exports = {
    app: {
        token: 'MTE5MTQwMjkzNDQ2Mjg2MTM2NA.GyZ9bb.Ortxu_m42Pp2Mvv2wNcKPpssQb9zgMCd9uSTgM',
        playing: 'by Ryoshi',
        global: true,
        guild: '1191403436026122350',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
