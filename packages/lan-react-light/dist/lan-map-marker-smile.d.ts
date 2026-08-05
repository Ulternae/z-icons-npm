import React from 'react';

export interface LanMapMarkerSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerSmile(props: LanMapMarkerSmileProps): React.ReactElement;
export default LanMapMarkerSmile;
