import React from 'react';

export interface LanSuperscriptProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuperscript: React.FC<LanSuperscriptProps>;
export default LanSuperscript;
