import React from 'react';

export interface LanMapMarkerAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerAltRegular(props: LanMapMarkerAltRegularProps): React.ReactElement;
export default LanMapMarkerAltRegular;
