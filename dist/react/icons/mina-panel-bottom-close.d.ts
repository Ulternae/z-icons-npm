import React from 'react';

export interface MinaPanelBottomCloseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelBottomClose: React.FC<MinaPanelBottomCloseProps>;
export default MinaPanelBottomClose;
