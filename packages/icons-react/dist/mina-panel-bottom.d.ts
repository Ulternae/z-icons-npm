import React from 'react';

export interface MinaPanelBottomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelBottom: React.FC<MinaPanelBottomProps>;
export default MinaPanelBottom;
