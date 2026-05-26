import React from 'react';

export interface LanMarkerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarkerRegular: React.FC<LanMarkerRegularProps>;
export default LanMarkerRegular;
