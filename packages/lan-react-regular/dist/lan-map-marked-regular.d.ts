import React from 'react';

export interface LanMapMarkedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkedRegular(props: LanMapMarkedRegularProps): React.ReactElement;
export default LanMapMarkedRegular;
