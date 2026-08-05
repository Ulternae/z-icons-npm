import React from 'react';

export interface LanMapMarkerAltSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerAltSlash(props: LanMapMarkerAltSlashProps): React.ReactElement;
export default LanMapMarkerAltSlash;
