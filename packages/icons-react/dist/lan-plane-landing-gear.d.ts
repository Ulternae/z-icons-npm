import React from 'react';

export interface LanPlaneLandingGearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneLandingGear: React.FC<LanPlaneLandingGearProps>;
export default LanPlaneLandingGear;
