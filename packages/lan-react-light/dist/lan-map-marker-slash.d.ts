import React from 'react';

export interface LanMapMarkerSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerSlash(props: LanMapMarkerSlashProps): React.ReactElement;
export default LanMapMarkerSlash;
