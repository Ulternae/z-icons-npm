import React from 'react';

export interface LanCableCarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCableCarRegular: React.FC<LanCableCarRegularProps>;
export default LanCableCarRegular;
