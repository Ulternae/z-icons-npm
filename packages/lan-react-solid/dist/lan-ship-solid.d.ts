import React from 'react';

export interface LanShipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShipSolid(props: LanShipSolidProps): React.ReactElement;
export default LanShipSolid;
