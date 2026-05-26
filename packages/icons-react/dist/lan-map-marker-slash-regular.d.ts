import React from 'react';

export interface LanMapMarkerSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerSlashRegular: React.FC<LanMapMarkerSlashRegularProps>;
export default LanMapMarkerSlashRegular;
