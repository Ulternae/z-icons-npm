import React from 'react';

export interface MinaDesktopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDesktopSolid: React.FC<MinaDesktopSolidProps>;
export default MinaDesktopSolid;
