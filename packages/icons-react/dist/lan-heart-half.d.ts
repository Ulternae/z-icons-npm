import React from 'react';

export interface LanHeartHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartHalf: React.FC<LanHeartHalfProps>;
export default LanHeartHalf;
