import React from 'react';

export interface MinaDotsVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsVertical(props: MinaDotsVerticalProps): React.ReactElement;
export default MinaDotsVertical;
