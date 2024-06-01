import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) =>{
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun Anda!"});
    }
    const user = await User.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    req.userId = user.id;
    req.role = user.role; 
    next();
}

export const adminOnly = async (req, res, next) =>{
    const user = await User.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    // if(user.role !== "admin") return res.status(403).json({msg: "Akses terlarang"});
    // if(user.role !== "master") return res.status(403).json({msg: "Akses terlarang"});

    user.role !== "admin" || "master" ? next() : res.status(403).json({msg:"Hanya Admin dan master yang bisa mengakses fitur ini"});
    // next();
}

export const operatorOnly = async(req, res, next)=>{
    const user = await User.findOne({
        where : {
            uuid : req.session.userId
        }
    });

    if(!user) return res.status(404).json({msg: "User Tidak ditemukan"})
    user.role !== "marketing" ? next() : res.status(403).json({msg: "Hanya marketing yang bisa mengakses fitur ini"})
}
export const marketingOnly = async(req, res, next)=>{
    const user = await User.findOne({
        where : {
            uuid : req.session.userId
        }
    });

    if(!user) return res.status(404).json({msg: "User Tidak ditemukan"})
    user.role !== "operator" ? next() : res.status(403).json({msg: "Hanya marketing yang bisa mengakses fitur ini"})
}