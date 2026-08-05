import React from 'react';

export interface LanPlaneLandingGearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneLandingGear(props: LanPlaneLandingGearProps): React.ReactElement;
export default LanPlaneLandingGear;
