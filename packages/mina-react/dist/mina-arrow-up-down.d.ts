import React from 'react';

export interface MinaArrowUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaArrowUpDown(props: MinaArrowUpDownProps): React.ReactElement;
export default MinaArrowUpDown;
