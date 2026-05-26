import React from 'react';

export interface LanDoNotEnterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoNotEnterThin: React.FC<LanDoNotEnterThinProps>;
export default LanDoNotEnterThin;
