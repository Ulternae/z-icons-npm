import React from 'react';

export interface LanMinusLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusLarge(props: LanMinusLargeProps): React.ReactElement;
export default LanMinusLarge;
