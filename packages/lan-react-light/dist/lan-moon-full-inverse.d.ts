import React from 'react';

export interface LanMoonFullInverseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonFullInverse(props: LanMoonFullInverseProps): React.ReactElement;
export default LanMoonFullInverse;
