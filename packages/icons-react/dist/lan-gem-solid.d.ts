import React from 'react';

export interface LanGemSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGemSolid: React.FC<LanGemSolidProps>;
export default LanGemSolid;
