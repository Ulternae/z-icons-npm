import React from 'react';

export interface LanShipLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShipLarge(props: LanShipLargeProps): React.ReactElement;
export default LanShipLarge;
