import React from 'react';

export interface LanMapMarkerEditProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerEdit: React.FC<LanMapMarkerEditProps>;
export default LanMapMarkerEdit;
