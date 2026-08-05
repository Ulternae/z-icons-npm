import React from 'react';

export interface LanMapMarkerSmileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerSmileSolid(props: LanMapMarkerSmileSolidProps): React.ReactElement;
export default LanMapMarkerSmileSolid;
