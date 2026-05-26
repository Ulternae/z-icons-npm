import React from 'react';

export interface LanShrimpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShrimpSolid: React.FC<LanShrimpSolidProps>;
export default LanShrimpSolid;
