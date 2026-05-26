import React from 'react';

export interface LanSliderCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSliderCircleSolid: React.FC<LanSliderCircleSolidProps>;
export default LanSliderCircleSolid;
