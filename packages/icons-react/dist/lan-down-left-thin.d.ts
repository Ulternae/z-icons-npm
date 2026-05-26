import React from 'react';

export interface LanDownLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownLeftThin: React.FC<LanDownLeftThinProps>;
export default LanDownLeftThin;
