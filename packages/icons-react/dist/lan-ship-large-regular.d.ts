import React from 'react';

export interface LanShipLargeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShipLargeRegular: React.FC<LanShipLargeRegularProps>;
export default LanShipLargeRegular;
