import React from 'react';

export interface MinaArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaArrowDown(props: MinaArrowDownProps): React.ReactElement;
export default MinaArrowDown;
