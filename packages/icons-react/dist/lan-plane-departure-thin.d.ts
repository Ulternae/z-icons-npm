import React from 'react';

export interface LanPlaneDepartureThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneDepartureThin: React.FC<LanPlaneDepartureThinProps>;
export default LanPlaneDepartureThin;
