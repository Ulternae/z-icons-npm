import React from 'react';

export interface LanHandFistRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandFistRegular: React.FC<LanHandFistRegularProps>;
export default LanHandFistRegular;
