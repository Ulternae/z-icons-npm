import React from 'react';

export interface LanPlaneDepartureProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneDeparture: React.FC<LanPlaneDepartureProps>;
export default LanPlaneDeparture;
