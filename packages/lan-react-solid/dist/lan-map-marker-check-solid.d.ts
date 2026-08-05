import React from 'react';

export interface LanMapMarkerCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerCheckSolid(props: LanMapMarkerCheckSolidProps): React.ReactElement;
export default LanMapMarkerCheckSolid;
