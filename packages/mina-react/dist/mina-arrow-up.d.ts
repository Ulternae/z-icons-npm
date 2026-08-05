import React from 'react';

export interface MinaArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaArrowUp(props: MinaArrowUpProps): React.ReactElement;
export default MinaArrowUp;
