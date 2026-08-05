import React from 'react';

export interface LanMapMarkedAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkedAltSolid(props: LanMapMarkedAltSolidProps): React.ReactElement;
export default LanMapMarkedAltSolid;
