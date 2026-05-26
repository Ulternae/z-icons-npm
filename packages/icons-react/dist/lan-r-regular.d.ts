import React from 'react';

export interface LanRRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRRegular: React.FC<LanRRegularProps>;
export default LanRRegular;
