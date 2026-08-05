import React from 'react';

export interface LanORegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanORegular(props: LanORegularProps): React.ReactElement;
export default LanORegular;
