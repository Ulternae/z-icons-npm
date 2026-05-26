import React from 'react';

export interface LanInputPasswordRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputPasswordRegular: React.FC<LanInputPasswordRegularProps>;
export default LanInputPasswordRegular;
