import React from 'react';

export interface LanMapMarkerSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerSlashSolid: React.FC<LanMapMarkerSlashSolidProps>;
export default LanMapMarkerSlashSolid;
