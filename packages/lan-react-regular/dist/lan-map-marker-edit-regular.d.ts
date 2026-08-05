import React from 'react';

export interface LanMapMarkerEditRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerEditRegular(props: LanMapMarkerEditRegularProps): React.ReactElement;
export default LanMapMarkerEditRegular;
