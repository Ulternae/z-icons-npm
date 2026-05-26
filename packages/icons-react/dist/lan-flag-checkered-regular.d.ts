import React from 'react';

export interface LanFlagCheckeredRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagCheckeredRegular: React.FC<LanFlagCheckeredRegularProps>;
export default LanFlagCheckeredRegular;
