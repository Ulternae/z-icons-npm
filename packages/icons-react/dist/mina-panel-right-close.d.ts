import React from 'react';

export interface MinaPanelRightCloseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelRightClose: React.FC<MinaPanelRightCloseProps>;
export default MinaPanelRightClose;
