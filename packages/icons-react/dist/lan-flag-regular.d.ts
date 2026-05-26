import React from 'react';

export interface LanFlagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagRegular: React.FC<LanFlagRegularProps>;
export default LanFlagRegular;
