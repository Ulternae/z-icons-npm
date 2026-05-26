import React from 'react';

export interface LanPlanePropProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneProp: React.FC<LanPlanePropProps>;
export default LanPlaneProp;
