import React from 'react';

export interface LanOctagonEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonEquals(props: LanOctagonEqualsProps): React.ReactElement;
export default LanOctagonEquals;
