import React from 'react';

export interface LanCarOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarOnRegular(props: LanCarOnRegularProps): React.ReactElement;
export default LanCarOnRegular;
