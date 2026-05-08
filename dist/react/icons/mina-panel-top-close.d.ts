import React from 'react';

export interface MinaPanelTopCloseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelTopClose: React.FC<MinaPanelTopCloseProps>;
export default MinaPanelTopClose;
