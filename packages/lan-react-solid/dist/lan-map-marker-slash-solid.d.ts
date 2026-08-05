import React from 'react';

export interface LanMapMarkerSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerSlashSolid(props: LanMapMarkerSlashSolidProps): React.ReactElement;
export default LanMapMarkerSlashSolid;
