import React from 'react';

export interface LanFortRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFortRegular: React.FC<LanFortRegularProps>;
export default LanFortRegular;
