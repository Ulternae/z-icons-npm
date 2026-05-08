import React from 'react';

export interface MinaPanelLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelLeft: React.FC<MinaPanelLeftProps>;
export default MinaPanelLeft;
