import React from 'react';

export interface MinaPanelLeftOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelLeftOpen: React.FC<MinaPanelLeftOpenProps>;
export default MinaPanelLeftOpen;
