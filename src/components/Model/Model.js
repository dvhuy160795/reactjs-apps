import React from 'react';
import ReactDOM from 'react-dom';

class Model extends React.Component {
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
              <div className="modal-body">
                <form>
			        <fieldset className="form-group">
			          <label htmlFor="exampleInputEmail1">Title</label>
			          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
			          <small className="text-muted">We'll never share your email with anyone else.</small>
			        </fieldset>
			        <fieldset className="form-group">
			          <label htmlFor="exampleInputPassword1">Alt</label>
			          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter email" />
			        </fieldset>
			        <fieldset className="form-group">
			          <label htmlFor="exampleSelect1">Example select</label>
			          <select className="form-control" id="exampleSelect11">
			            <option>1</option>
			            <option>
			            </option><option>
			            </option><option>
			            </option><option>
			            </option></select>
			        </fieldset>
			        <fieldset className="form-group">
			          <label htmlFor="exampleInputFile">File input</label>
			          <input type="file" className="form-control-file" id="exampleInputFile" />
		          	</fieldset>
		        </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Model;
