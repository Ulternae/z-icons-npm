import React from 'react';

export interface LanHandPointerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointerRegular(props: LanHandPointerRegularProps): React.ReactElement;
export default LanHandPointerRegular;
