import React from 'react';

export interface LanBlackboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlackboardSolid: React.FC<LanBlackboardSolidProps>;
export default LanBlackboardSolid;
