import React from 'react';

export interface LanMapMarkerEditThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerEditThin(props: LanMapMarkerEditThinProps): React.ReactElement;
export default LanMapMarkerEditThin;
