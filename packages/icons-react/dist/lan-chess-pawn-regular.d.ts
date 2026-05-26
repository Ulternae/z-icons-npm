import React from 'react';

export interface LanChessPawnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessPawnRegular: React.FC<LanChessPawnRegularProps>;
export default LanChessPawnRegular;
