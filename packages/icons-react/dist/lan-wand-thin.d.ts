import React from 'react';

export interface LanWandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWandThin: React.FC<LanWandThinProps>;
export default LanWandThin;
