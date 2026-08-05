import React from 'react';

export interface LanCarKeyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarKeyRegular(props: LanCarKeyRegularProps): React.ReactElement;
export default LanCarKeyRegular;
