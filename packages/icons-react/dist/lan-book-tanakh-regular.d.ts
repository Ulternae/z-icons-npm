import React from 'react';

export interface LanBookTanakhRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookTanakhRegular: React.FC<LanBookTanakhRegularProps>;
export default LanBookTanakhRegular;
