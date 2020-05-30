


handleUploadButtonClicked = (e) => {
    e.preventDefault();
    if (this.uploadInput.files.length > 0) {

     // Create a DOM form and add the file to it under the name uploadedphoto
     const domForm = new FormData();
     domForm.append('uploadedphoto', this.uploadInput.files[0]);
     axios.post('/photos/new', domForm)
       .then((res) => {
         console.log(res);
       })
       .catch(err => console.log(`POST ERR: ${err}`));
    }
  }


 <div>
 <form>
 <input type="file" accept="image/*" ref={(domFileRef) => { this.uploadInput = domFileRef; }} />

 <button type="submit" value="Submit" onClick={this.handleUploadButtonClicked}>Submit</button>
 </form>
 </div>