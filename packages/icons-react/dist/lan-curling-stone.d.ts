import React from 'react';

export interface LanCurlingStoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCurlingStone: React.FC<LanCurlingStoneProps>;
export default LanCurlingStone;
