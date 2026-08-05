import React from 'react';

export interface LanMapMarkerPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerPlusSolid(props: LanMapMarkerPlusSolidProps): React.ReactElement;
export default LanMapMarkerPlusSolid;
