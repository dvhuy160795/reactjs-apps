import React from 'react';

class Model extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onUploadFile = this.onUploadFile.bind(this)
		let params = this.props.params;
		this.params = [];
		params.map((param, index) => {
			this.params[param] = React.createRef();
			return "";
		});
		this.state ={
			image: ''
		}
	}
	handleSubmit(event) {
		event.preventDefault();
		let image = {
			image_title : this.params.image_title.current.value,
			image_atl : this.params.image_atl.current.value,
			image : this.state.image,
			image_is_use : this.params.image_is_use.current.value,
		};
		this.props.onSave(image, (messages) => {
			let params = this.props.params;
			params.map((param) => {
				if (messages[param]) {
					let strMessage = messages[param].join("<br>");
					document.getElementById(param + "_ms").innerHTML = strMessage;
					document.getElementById(param + "_ms").classList.remove("d-none");
				}
				return "";
			});
		});
	}

	onCloseModel = () => {
		this.props.onClose();
	};

	createFile(file) {
		let reader = new FileReader();
		reader.onload = (e) => {
			this.setState({
				image: {
					content : e.target.result,
					name : file.name,
					size : file.size
				}
			})
		};
		reader.readAsDataURL(file);
		console.log(reader,file);
	}
	onUploadFile(e) {
		let files = e.target.files || e.dataTransfer.files;
		if (!files.length)
			return;
		this.createFile(e.target.files[0]);
	}
	render() {
		return (
			<div className="modal" id="exampleModalLong" style={{display:"block"}} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" >
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLongTitle">Add New Image</h5>
							<button type="button" className="close" onClick={this.onCloseModel} aria-label="Close">
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<form onSubmit={this.handleSubmit} encType="multipart/form-data">
							<div className="modal-body">
								<fieldset className="form-group">
									<label htmlFor="exampleInputEmail1">Title</label>
									<input type="text" className="form-control" id="image_title" placeholder="title" ref={this.params.image_title}/>
									<small className="text-danger d-none" id={"image_title_ms"}>We'll never share your email with anyone else.</small>
								</fieldset>
								<fieldset className="form-group">
									<label htmlFor="exampleInputPassword1">Alt</label>
									<input type="text" className="form-control" id="image_atl" placeholder="alt" ref={this.params.image_atl}/>
									<small className="text-danger d-none" id={"image_atl_ms"}>We'll never share your email with anyone else.</small>
								</fieldset>
								<fieldset className="form-group">
									<label htmlFor="exampleSelect1">Example select</label>
									<select className="form-control" id="image_is_use" ref={this.params.image_is_use}>
										<option value="1">Use</option>
										<option value="0">Not Use</option>
									</select>
									<small className="text-danger d-none" id={"image_is_use_ms"}>We'll never share your email with anyone else.</small>
								</fieldset>
								<fieldset className="form-group">
									<label htmlFor="image_src">Src</label>
									<input type="file" className="form-control" id="image_src" name="image"  placeholder="Src" onChange={this.onUploadFile}  ref={this.params.image_src}/>
									<img id={"img"} src=""/>
									<small className="text-danger d-none" id={"image_src_ms"}>We'll never share your email with anyone else.</small>
								</fieldset>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" id={"btnClose"} onClick={this.onCloseModel} data-dismiss="modal">Close</button>
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
