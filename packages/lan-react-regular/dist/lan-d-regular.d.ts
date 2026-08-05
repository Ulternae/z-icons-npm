import React from 'react';

export interface LanDRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDRegular(props: LanDRegularProps): React.ReactElement;
export default LanDRegular;
