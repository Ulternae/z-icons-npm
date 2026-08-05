import React from 'react';

export interface LanMapMarkerMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerMinusSolid(props: LanMapMarkerMinusSolidProps): React.ReactElement;
export default LanMapMarkerMinusSolid;
