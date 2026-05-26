import React from 'react';

export interface LanMapPinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapPinRegular: React.FC<LanMapPinRegularProps>;
export default LanMapPinRegular;
