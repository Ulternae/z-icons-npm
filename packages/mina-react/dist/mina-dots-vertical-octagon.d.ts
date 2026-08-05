import React from 'react';

export interface MinaDotsVerticalOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsVerticalOctagon(props: MinaDotsVerticalOctagonProps): React.ReactElement;
export default MinaDotsVerticalOctagon;
