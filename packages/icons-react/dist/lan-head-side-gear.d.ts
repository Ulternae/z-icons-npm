import React from 'react';

export interface LanHeadSideGearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideGear: React.FC<LanHeadSideGearProps>;
export default LanHeadSideGear;
