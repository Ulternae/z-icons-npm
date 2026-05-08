import React from 'react';

export interface MinaDesktopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDesktop: React.FC<MinaDesktopProps>;
export default MinaDesktop;
