import React from 'react';

export interface LanHandSpockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandSpockThin: React.FC<LanHandSpockThinProps>;
export default LanHandSpockThin;
