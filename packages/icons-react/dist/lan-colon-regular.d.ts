import React from 'react';

export interface LanColonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanColonRegular: React.FC<LanColonRegularProps>;
export default LanColonRegular;
