import * as React from 'react';
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '../../../packages/top-app-bar';
import MaterialIcon from '../../../packages/material-icon';
import MainTopAppBarContent from './mainContent';
import {mapActionItem} from './index';
import {actionItems} from './actionItems';

const title: string = 'Prominent Dense';
const TopAppBarProminentDenseScreenshotTest: React.FunctionComponent = () => {
  return (
    <div className='top-app-bar-container'>
      <TopAppBar prominent dense >
        <TopAppBarRow>
          <TopAppBarSection align='start'>
            <TopAppBarIcon navIcon tabIndex={0}>
              <MaterialIcon hasRipple icon='menu'/>
            </TopAppBarIcon>
            <TopAppBarTitle>{title}</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection align='end'>
            {actionItems.map(mapActionItem)}
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <MainTopAppBarContent prominent dense />
    </div>
  );
};

export default TopAppBarProminentDenseScreenshotTest;
