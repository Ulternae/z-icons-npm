import React from 'react';

export interface LanShipLargeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShipLargeRegular(props: LanShipLargeRegularProps): React.ReactElement;
export default LanShipLargeRegular;
