import React from 'react';

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedFile:'',
            isFilePicked:false
        }
        
        
    }

    changeHandler = (event) => {
		this.setState({selectedFile:event.target.files[0]});
		this.setState({isSelected:true});
	}

	handleSubmission = () => {
        const formData = new FormData();

		formData.append('image', this.state.selectedFile);

		fetch(
			'http://localhost:8080/api/upload',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	    }
	

    render() {
        
        return(
            <div className="wrapper">
			<input type="file" name="image" onChange={this.changeHandler} />
			{this.state.isSelected ? (
				<div>
					<p>Filename: {this.state.selectedFile.name}</p>
					<p>Filetype: {this.state.selectedFile.type}</p>
					<p>Size in bytes: {this.state.selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{this.state.selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={this.handleSubmission}>Submit</button>
			</div>
		</div>
            
        )
    }
}

export default Test