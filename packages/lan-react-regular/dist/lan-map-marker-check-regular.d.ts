import React from 'react';

export interface LanMapMarkerCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerCheckRegular(props: LanMapMarkerCheckRegularProps): React.ReactElement;
export default LanMapMarkerCheckRegular;
