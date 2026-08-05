import React from 'react';

export interface MinaAArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAArrowUp(props: MinaAArrowUpProps): React.ReactElement;
export default MinaAArrowUp;
