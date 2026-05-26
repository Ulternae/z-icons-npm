import React from 'react';

export interface LanSaxHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSaxHotSolid: React.FC<LanSaxHotSolidProps>;
export default LanSaxHotSolid;
