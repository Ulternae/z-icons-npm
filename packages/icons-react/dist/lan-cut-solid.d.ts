import React from 'react';

export interface LanCutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCutSolid: React.FC<LanCutSolidProps>;
export default LanCutSolid;
