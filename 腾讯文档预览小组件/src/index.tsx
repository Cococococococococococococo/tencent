import React from 'react';
import { initializeWidget } from '@vikadata/widget-sdk';

import { Selection } from './selection';


const WidgetDeveloperTemplate: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100%' ,width:'auto'}}>
      
        <Selection />
        
      
    
    </div>
  );
};


initializeWidget(WidgetDeveloperTemplate, process.env.WIDGET_PACKAGE_ID!);
