import React from 'react';

export interface LanCircleMillThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMillThin: React.FC<LanCircleMillThinProps>;
export default LanCircleMillThin;
