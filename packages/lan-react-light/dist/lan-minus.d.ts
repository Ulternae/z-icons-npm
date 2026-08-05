import React from 'react';

export interface LanMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinus(props: LanMinusProps): React.ReactElement;
export default LanMinus;
