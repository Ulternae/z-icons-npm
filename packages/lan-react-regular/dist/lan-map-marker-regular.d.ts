import React from 'react';

export interface LanMapMarkerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerRegular(props: LanMapMarkerRegularProps): React.ReactElement;
export default LanMapMarkerRegular;
