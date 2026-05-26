import React from 'react';

export interface LanMapMarkerAltSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerAltSlash: React.FC<LanMapMarkerAltSlashProps>;
export default LanMapMarkerAltSlash;
