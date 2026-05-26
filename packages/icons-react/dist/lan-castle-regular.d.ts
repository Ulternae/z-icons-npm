import React from 'react';

export interface LanCastleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCastleRegular: React.FC<LanCastleRegularProps>;
export default LanCastleRegular;
