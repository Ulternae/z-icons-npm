import React from 'react';

export interface LanOvenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOvenRegular(props: LanOvenRegularProps): React.ReactElement;
export default LanOvenRegular;
