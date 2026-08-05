import React from 'react';

export interface LanMapMarkerSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerSlashRegular(props: LanMapMarkerSlashRegularProps): React.ReactElement;
export default LanMapMarkerSlashRegular;
