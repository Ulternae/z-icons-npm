import React from 'react';

export interface LanStreetViewRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStreetViewRegular: React.FC<LanStreetViewRegularProps>;
export default LanStreetViewRegular;
