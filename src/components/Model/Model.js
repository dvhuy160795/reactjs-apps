import React from 'react';

class Model extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.fileInput1 = React.createRef();
		// this.fileInput2 = React.createRef();
		this.title = React.createRef();
		this.alt = React.createRef();
		this.isUse = React.createRef();
		this.src = React.createRef();
	}
	handleSubmit(event) {
		event.preventDefault();
		let image = {
	      "alt" : this.alt.current.value,
	      "title" : this.title.current.value,
	      "src" : this.src.current.value,
	      "isActive" : this.isUse.current.value === '1',
	    };
	    this.props.onChangeList(image);
		// if (this.fileInput1.current.files[0]) {
		// 	// console.log(URL.createObjectURL(this.fileInput1.current.files[0]),window.URL.createObjectURL(this.fileInput1.current.files[0]));
		// 	document.getElementById("imageThumnail1").src = URL.createObjectURL(this.fileInput1.current.files[0]);
		// }

		// if (this.fileInput2.current.files[0]) {
		// 	document.getElementById("imageThumnail2").src = URL.createObjectURL(this.fileInput2.current.files[0]);
		// }
	}
	handleChangeImage(event) {
		console.log(URL.createObjectURL(this.fileInput.current.files[0]),window.URL.createObjectURL(this.fileInput.current.files[0]),document.getElementById("exampleInputFile1").files);
		document.getElementById("imageThumnail").src = URL.createObjectURL(this.fileInput.current.files[0]);
		// alert(
		// 	`Selected file - ${this.fileInput.current.files[0].name}`
		// );
	}
	render() {
		return (
		    <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
		      <div className="modal-dialog" role="document">
		        <div className="modal-content">
		          <div className="modal-header">
		            <h5 className="modal-title" id="exampleModalLongTitle">Add New Image</h5>
		            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		              <span aria-hidden="true">×</span>
		            </button>
		          </div>
		          <form onSubmit={this.handleSubmit}>
			          <div className="modal-body">
				        <fieldset className="form-group">
				          <label htmlFor="exampleInputEmail1">Title</label>
				          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="title" ref={this.title}/>
				          <small className="text-muted">We'll never share your email with anyone else.</small>
				        </fieldset>
				        <fieldset className="form-group">
				          <label htmlFor="exampleInputPassword1">Alt</label>
				          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="alt" ref={this.alt}/>
				        </fieldset>
				        <fieldset className="form-group">
							<label htmlFor="exampleSelect1">Example select</label>
							<select className="form-control" id="exampleSelect11" ref={this.isUse}>
					            <option value="1">Use</option>
					            <option value="0">Not Use</option>
			            	</select>
				        </fieldset>
				        <fieldset className="form-group">
				          <label htmlFor="exampleInputPassword1">Src</label>
				          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Src" ref={this.src}/>
			          	</fieldset>
			          </div>
			          <div className="modal-footer">
			            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			            <button type="submit" className="btn btn-primary">Save changes</button>
			          </div>
		          </form>
		        </div>
		      </div>
		    </div>
		);
	}
}

export default Model;
