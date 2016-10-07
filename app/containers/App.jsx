var App = React.createClass({
	getInitialState: function () {
		return { 	
				year: 0, 
				check : ''
				};
	},
	inputChangeHandle: function (event) {
		this.setState({
		    year: event.target.value
		});
	},
	buttonClickHandle: function () {
		self = this;
		$.ajax({
			async: true,
			type: "POST",
			url: "api/checkyear",
			data: {year: this.state.year},
			dataType: "json",
			success: function(data) {
				self.setState({
					check: data.valid
				});
			}
		});
	},
	render: function () {
		return (
			<div>
				<div>
					请输入年份:<br/>
					<input type="text" value={this.state.year} onChange={this.inputChangeHandle} />
				</div>
				<div>
					<button type="button" onClick={this.buttonClickHandle}>发送给服务器判断</button>
				</div>
				<div>
					是否为闰年:<br/>
					<input type="text" value={this.state.check} />
				</div>
			</div>
		);
	}
});

module.exports = App;
