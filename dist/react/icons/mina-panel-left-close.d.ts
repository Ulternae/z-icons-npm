import React from 'react';

export interface MinaPanelLeftCloseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPanelLeftClose: React.FC<MinaPanelLeftCloseProps>;
export default MinaPanelLeftClose;
