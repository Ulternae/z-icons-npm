import React from 'react';

export interface LanMapMarkerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerSolid(props: LanMapMarkerSolidProps): React.ReactElement;
export default LanMapMarkerSolid;
