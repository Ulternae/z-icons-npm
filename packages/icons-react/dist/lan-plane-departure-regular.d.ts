import React from 'react';

export interface LanPlaneDepartureRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneDepartureRegular: React.FC<LanPlaneDepartureRegularProps>;
export default LanPlaneDepartureRegular;
