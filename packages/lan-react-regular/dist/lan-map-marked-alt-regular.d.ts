import React from 'react';

export interface LanMapMarkedAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkedAltRegular(props: LanMapMarkedAltRegularProps): React.ReactElement;
export default LanMapMarkedAltRegular;
