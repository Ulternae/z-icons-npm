import React from 'react';

export interface LanShipLargeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShipLargeSolid(props: LanShipLargeSolidProps): React.ReactElement;
export default LanShipLargeSolid;
