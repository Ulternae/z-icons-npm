import React from 'react';

export interface LanSmokingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSmoking: React.FC<LanSmokingProps>;
export default LanSmoking;
