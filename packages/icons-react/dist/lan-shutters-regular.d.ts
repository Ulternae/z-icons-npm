import React from 'react';

export interface LanShuttersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttersRegular: React.FC<LanShuttersRegularProps>;
export default LanShuttersRegular;
