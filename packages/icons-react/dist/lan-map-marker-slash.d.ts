import React from 'react';

export interface LanMapMarkerSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerSlash: React.FC<LanMapMarkerSlashProps>;
export default LanMapMarkerSlash;
