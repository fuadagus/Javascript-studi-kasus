function Angkot(supir,trayek,penumpang,kas){
  this.supir=supir;
  this.trayek=trayek;
  this.penumpang=penumpang;
  this.kas=kas;
  this.tambahPenumpang=function (namaPenumpang){
    this.penumpang.push(namaPenumpang)
    return penumpang}
  this.penumpangTurun=function (namaPenumpang,bayar){
    if (this.penumpang.find(element => element==namaPenumpang)!==namaPenumpang){
      console.log('penumpang tidak ditemukan')
      } else {var i=penumpang.indexOf(namaPenumpang);
      this.penumpang.splice(i,1);
      
      this.kas+=bayar;
      return penumpang;
      return kas};
        
      }}

    


var angkot1=new Angkot('fuad',[],[],0)



