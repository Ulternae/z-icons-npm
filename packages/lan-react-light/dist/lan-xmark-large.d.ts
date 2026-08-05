import React from 'react';

export interface LanXmarkLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXmarkLarge(props: LanXmarkLargeProps): React.ReactElement;
export default LanXmarkLarge;
