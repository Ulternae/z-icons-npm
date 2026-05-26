import React from 'react';

export interface LanSliderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSliderSolid: React.FC<LanSliderSolidProps>;
export default LanSliderSolid;
