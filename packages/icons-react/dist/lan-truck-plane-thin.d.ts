import React from 'react';

export interface LanTruckPlaneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckPlaneThin: React.FC<LanTruckPlaneThinProps>;
export default LanTruckPlaneThin;
