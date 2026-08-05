import React from 'react';

export interface LanMapMarkerAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerAlt(props: LanMapMarkerAltProps): React.ReactElement;
export default LanMapMarkerAlt;
