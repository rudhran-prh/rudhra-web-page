creator = 'princerudh'
upi_id = 'princerudh.in@oksbi';
upi_name = 'Prince Rudh';
url = `https://upper-rocky-rudhra-bot.koyeb.app`;
git_id = `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`;
tokens = ['toup','acrc','with_you'];
session = 'https://gist.github.com/princerudh/';
support = 'https://chat.whatsapp.com/BwDksCQU7wUGAFH0EsIvgD';
email_pass = 'fpel bioh wwtc hkce';
logo = `https://i.imgur.com/FmdWDML.jpg`;
api_number = `+16032551591`;
user_save = `https://32c9b487-59b8-49ed-a455-aaf999ba83e2-00-2kvtd2t0kdj68.sisko.replit.dev/`;
//_______________________ ┏  Apikey  ┓ _______________________\\
imgbb = "76a050f031972d9f27e329d767dd988f" || "deb80cd12ababea1c9b9a8ad6ce3fab2";
imgur = '3ca8036b07e0f25';
apikeys = '31b90e8a8c7c7247751ab2be4c63012d';

//message.events({});//
start = ''
block = ['918113921898','917034892686'];
update = {
    key:"webu",
    message:{
        text: "*External Plugins:* https://upper-romy-inrl-bot.koyeb.app/plugins/list\n*contact*: +16032551591",
        contextInfo: {
		externalAdReply:{
			sourceUrl: "https://whatsapp.com/channel/0029VaAKCMO1noz22UaRdB1Q",
			title:"join our WhatsApp channel for updates!!"
		}
	}
    }
}

//_______________________ ┏  Loghandler  ┓ _______________________\\

error400 = (res) => {
        res.statusMessage = "Current password does not match";
	return res.status(400).json({
	status: false,
        code: 400,
        message: 'Service Unavaible',
        maintanied_by: `${creator}`});
}

error503 = (res) => {
        res.statusMessage = "temporarily unavailable!";
	return res.status(503).json({
	status: false,
        code: 503,
        maintanied_by: `${creator}`});
}

error500 = (res, msg) => {
        res.statusMessage = "temporarily unavailable!";
	return res.status(500).json({
	status: false,
        code: 500,
        message: msg,
        maintanied_by: `${creator}`});
}

error200 = (res,msg) => {
	return res.status(200).json({
	status: false,
        code: 200,
        message: msg || 'Internal Server Error!',
        maintanied_by: `${creator}`
	});
}
errorMsg = (res, msg) => {
	return res.status(200).json({
	status: false,
        message: msg,
	creator
	});
}
