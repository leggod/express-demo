const mongoose = require('mongoos');
const options = {
    authSource: 'admin',
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    bufferMaxEntries: 0
}
mongoose.connect('mongodb://admin:admin@127.0.0.1:27017/showtime', options, function (err) {
    console.log(err);
});
var schema = new mongoose.Schema({ name: 'string', size: 'string' }, { collection: 'tank' });
var Tank = mongoose.model('tank', schema);
Tank.create({ size: 'small' }, function (err, small) {
    if (err) return handleError(err);
    // saved!
    console.log(small);
    console.log('insert success');
});
	// Tank.remove({ size: 'small' }, function (err) {
	// 	if (err) return handleError(err);
	// 	console.log('delete success');
	// 	// removed!
	// });
	// Tank.update({name:'ww'},{$set: {name: '王五'}},function (err, docs) {
	// 	if (err) return handleError(err);
	// 	console.log('update success:',docs);
	// })
	// Tank.find({ name: 'xs' }, function (err, docs) {
	// 	if (err) handleError(err);
	// 	console.log('find success:', docs[0]._id);
	// })