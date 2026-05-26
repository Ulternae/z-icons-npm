import React from 'react';

export interface LanJointRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJointRegular: React.FC<LanJointRegularProps>;
export default LanJointRegular;
