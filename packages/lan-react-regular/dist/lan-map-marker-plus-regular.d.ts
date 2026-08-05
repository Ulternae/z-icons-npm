import React from 'react';

export interface LanMapMarkerPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerPlusRegular(props: LanMapMarkerPlusRegularProps): React.ReactElement;
export default LanMapMarkerPlusRegular;
