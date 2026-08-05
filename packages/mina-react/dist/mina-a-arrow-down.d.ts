import React from 'react';

export interface MinaAArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAArrowDown(props: MinaAArrowDownProps): React.ReactElement;
export default MinaAArrowDown;
