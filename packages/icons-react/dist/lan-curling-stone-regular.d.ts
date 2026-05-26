import React from 'react';

export interface LanCurlingStoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCurlingStoneRegular: React.FC<LanCurlingStoneRegularProps>;
export default LanCurlingStoneRegular;
