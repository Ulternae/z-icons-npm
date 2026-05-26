import React from 'react';

export interface LanSuperscriptSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuperscriptSolid: React.FC<LanSuperscriptSolidProps>;
export default LanSuperscriptSolid;
