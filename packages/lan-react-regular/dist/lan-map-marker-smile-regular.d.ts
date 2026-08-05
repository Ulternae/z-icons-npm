import React from 'react';

export interface LanMapMarkerSmileRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerSmileRegular(props: LanMapMarkerSmileRegularProps): React.ReactElement;
export default LanMapMarkerSmileRegular;
