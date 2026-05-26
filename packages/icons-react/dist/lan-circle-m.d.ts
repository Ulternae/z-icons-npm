import React from 'react';

export interface LanCircleMProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleM: React.FC<LanCircleMProps>;
export default LanCircleM;
