import React from 'react';

export interface LanMapMarkedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkedRegular: React.FC<LanMapMarkedRegularProps>;
export default LanMapMarkedRegular;
