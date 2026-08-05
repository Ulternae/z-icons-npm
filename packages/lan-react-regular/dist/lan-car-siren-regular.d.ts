import React from 'react';

export interface LanCarSirenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSirenRegular(props: LanCarSirenRegularProps): React.ReactElement;
export default LanCarSirenRegular;
