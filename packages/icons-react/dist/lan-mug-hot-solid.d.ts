import React from 'react';

export interface LanMugHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugHotSolid: React.FC<LanMugHotSolidProps>;
export default LanMugHotSolid;
