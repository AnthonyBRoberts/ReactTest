var Zone = require('../models/Zone')

module.exports = {
    find: function(params, callback){
        Zone.find(params, function(err, zones){
            if (err){
                callback(err, null)
                return
            }
            callback(null, zones)
        })
    },
    findById: function(id, callback){
        Zone.findById(id, function(err, zone){
            if (err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },
    create: function(params, callback){
        var zips = params.zipCodes.split(',')
        var zipCodes = []
        zips.forEach(function(z){
            if(z.trim().length == 5){
                zipCodes.push(z.trim())
            }
        })
        params.zipCodes = zipCodes
        Zone.create(params, function(err, zone){
            if (err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },
    update: function(id, params, callback){
        Zone.findByIdAndUpdate(id, params, {new:true}, function(err, zone){
            if (err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },
    delete: function(id, params, callback){
        Zone.findByIdAndRemove(id, function(err, zone){
            if (err){
                callback(err, null)
                return
            }
            callback(null, null)
        })
    }
}