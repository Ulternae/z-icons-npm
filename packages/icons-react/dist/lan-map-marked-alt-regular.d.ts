import React from 'react';

export interface LanMapMarkedAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkedAltRegular: React.FC<LanMapMarkedAltRegularProps>;
export default LanMapMarkedAltRegular;
