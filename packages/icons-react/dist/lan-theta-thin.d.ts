import React from 'react';

export interface LanThetaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThetaThin: React.FC<LanThetaThinProps>;
export default LanThetaThin;
