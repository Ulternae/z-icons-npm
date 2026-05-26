import React from 'react';

export interface LanMapMarkerSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerSlashThin: React.FC<LanMapMarkerSlashThinProps>;
export default LanMapMarkerSlashThin;
