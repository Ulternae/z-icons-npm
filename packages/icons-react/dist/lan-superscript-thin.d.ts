import React from 'react';

export interface LanSuperscriptThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuperscriptThin: React.FC<LanSuperscriptThinProps>;
export default LanSuperscriptThin;
