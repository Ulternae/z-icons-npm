import React from 'react';

export interface LanMapMarkerSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerSlashThin(props: LanMapMarkerSlashThinProps): React.ReactElement;
export default LanMapMarkerSlashThin;
