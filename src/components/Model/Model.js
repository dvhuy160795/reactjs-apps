import React from 'react';

class Model extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		let params = this.props.params;
		this.params = [];
		params.map((param, index) => {
			this.params[param] = React.createRef();
		});
	}
	handleSubmit(event) {
		event.preventDefault();
	    this.props.onSave(this.params,this);
	    this.onCloseModel();
	}

	onCloseModel() {
		document.getElementById("btnClose").click();
	}
	render() {
		return (
		    <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
		      <div className="modal-dialog" role="document">
		        <div className="modal-content">
		          <div className="modal-header">
		            <h5 className="modal-title" id="exampleModalLongTitle">Add New Image</h5>
		            <button type="button" className="close" onClick={this.onCloseModel} aria-label="Close">
		              <span aria-hidden="true">×</span>
		            </button>
		          </div>
		          <form onSubmit={this.handleSubmit}>
			          <div className="modal-body">
				        <fieldset className="form-group">
				          <label htmlFor="exampleInputEmail1">Title</label>
				          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="title" ref={this.params.title}/>
				          <small className="text-muted">We'll never share your email with anyone else.</small>
				        </fieldset>
				        <fieldset className="form-group">
				          <label htmlFor="exampleInputPassword1">Alt</label>
				          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="alt" ref={this.params.alt}/>
				        </fieldset>
				        <fieldset className="form-group">
							<label htmlFor="exampleSelect1">Example select</label>
							<select className="form-control" id="exampleSelect11" ref={this.params.isUse}>
					            <option value="1">Use</option>
					            <option value="0">Not Use</option>
			            	</select>
				        </fieldset>
				        <fieldset className="form-group">
				          <label htmlFor="exampleInputPassword1">Src</label>
				          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Src" ref={this.params.src}/>
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
