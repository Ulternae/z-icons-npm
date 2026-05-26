import React from 'react';

export interface LanTThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTThin: React.FC<LanTThinProps>;
export default LanTThin;
