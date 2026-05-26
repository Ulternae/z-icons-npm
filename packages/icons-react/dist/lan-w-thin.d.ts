import React from 'react';

export interface LanWThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWThin: React.FC<LanWThinProps>;
export default LanWThin;
