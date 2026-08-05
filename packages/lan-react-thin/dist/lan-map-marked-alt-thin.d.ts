import React from 'react';

export interface LanMapMarkedAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkedAltThin(props: LanMapMarkedAltThinProps): React.ReactElement;
export default LanMapMarkedAltThin;
