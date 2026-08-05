import React from 'react';

export interface LanMapMarkerTimesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerTimesSolid(props: LanMapMarkerTimesSolidProps): React.ReactElement;
export default LanMapMarkerTimesSolid;
