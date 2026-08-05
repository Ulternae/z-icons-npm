import React from 'react';

export interface LanTreeLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeLarge(props: LanTreeLargeProps): React.ReactElement;
export default LanTreeLarge;
