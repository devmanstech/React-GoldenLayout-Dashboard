import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled, { ThemeProvider } from 'styled-components';
import { IAppState } from '../../services/store/reducersDef';
import GlobalStyle from '../styles/GlobalStyle';
import { themes, ThemeTypes } from '../styles/themes';
import Counter from '../../components/Counter';

interface IPopupApp {
	theme: ThemeTypes;
	dispatch: Dispatch;
}

class PopupComp extends React.Component<IPopupApp> {

	render() {
		return (
			<ThemeProvider theme={themes[this.props.theme]}>
				<React.Fragment>
					<GlobalStyle />
					<PopupAppContainer>
						<Counter />
					</PopupAppContainer>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}

const mapStateToProps = (state: IAppState) => {
	return {
		theme: state.settings.theme
	};
};

export default connect(mapStateToProps)(PopupComp);

const PopupAppContainer = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: center;
	justify-items: center;
	align-items: center;
	height: 200px;
	width: 300px;
	margin: 10px;
	background-color: ${p => p.theme.backgroundColor};
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
