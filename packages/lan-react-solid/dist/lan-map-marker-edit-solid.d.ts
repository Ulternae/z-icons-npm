import React from 'react';

export interface LanMapMarkerEditSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerEditSolid(props: LanMapMarkerEditSolidProps): React.ReactElement;
export default LanMapMarkerEditSolid;
