import React from 'react';

export interface LanMarkerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarkerRegular(props: LanMarkerRegularProps): React.ReactElement;
export default LanMarkerRegular;
