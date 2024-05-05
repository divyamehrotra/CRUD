exports.homeRoutes = (req,res) =>{
    res.render('index');
}

exports.add_user = (req,res) =>{
    res.render('add_user');
}

exports.update_user = (req,res) =>{
    res.render('update_user');
}


// mongodb+srv://admin:admin123@cluster0.apsndew.mongodb.net/