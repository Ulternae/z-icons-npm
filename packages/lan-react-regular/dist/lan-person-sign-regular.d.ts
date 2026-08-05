import React from 'react';

export interface LanPersonSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSignRegular(props: LanPersonSignRegularProps): React.ReactElement;
export default LanPersonSignRegular;
