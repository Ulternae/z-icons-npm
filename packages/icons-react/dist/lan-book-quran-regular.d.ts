import React from 'react';

export interface LanBookQuranRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookQuranRegular: React.FC<LanBookQuranRegularProps>;
export default LanBookQuranRegular;
