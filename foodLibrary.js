var Food = function (fNameP, caloriesP, numP) {
    this.fName = fNameP;
    this.calories = caloriesP;
    this.num = numP;
       
};

Food.prototype.isValid = function () {
    if (this.fName == "" || this.calories == "" || this.num == "" || isNaN(this.calories) || isNaN(this.num) ) {
        return false;
    } else {
        return true;
    }
};

Food.prototype.calculate = function() {
    
    return this.calories * this.num;
    
}
