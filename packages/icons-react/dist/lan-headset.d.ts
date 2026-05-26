import React from 'react';

export interface LanHeadsetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadset: React.FC<LanHeadsetProps>;
export default LanHeadset;
