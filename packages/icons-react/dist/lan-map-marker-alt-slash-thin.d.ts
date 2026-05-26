import React from 'react';

export interface LanMapMarkerAltSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerAltSlashThin: React.FC<LanMapMarkerAltSlashThinProps>;
export default LanMapMarkerAltSlashThin;
