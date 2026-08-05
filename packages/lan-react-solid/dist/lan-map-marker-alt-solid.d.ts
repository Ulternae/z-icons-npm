import React from 'react';

export interface LanMapMarkerAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerAltSolid(props: LanMapMarkerAltSolidProps): React.ReactElement;
export default LanMapMarkerAltSolid;
