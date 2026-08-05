import React from 'react';

export interface LanIntersectionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIntersectionRegular(props: LanIntersectionRegularProps): React.ReactElement;
export default LanIntersectionRegular;
