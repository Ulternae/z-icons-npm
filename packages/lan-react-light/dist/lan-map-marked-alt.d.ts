import React from 'react';

export interface LanMapMarkedAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkedAlt(props: LanMapMarkedAltProps): React.ReactElement;
export default LanMapMarkedAlt;
