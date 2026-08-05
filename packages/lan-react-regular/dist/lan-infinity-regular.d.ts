import React from 'react';

export interface LanInfinityRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInfinityRegular(props: LanInfinityRegularProps): React.ReactElement;
export default LanInfinityRegular;
