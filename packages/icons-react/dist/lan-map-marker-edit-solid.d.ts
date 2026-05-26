import React from 'react';

export interface LanMapMarkerEditSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerEditSolid: React.FC<LanMapMarkerEditSolidProps>;
export default LanMapMarkerEditSolid;
