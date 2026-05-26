import React from 'react';

export interface LanHandsBoundThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsBoundThin: React.FC<LanHandsBoundThinProps>;
export default LanHandsBoundThin;
