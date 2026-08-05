import React from 'react';

export interface MinaCornerUpRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCornerUpRight(props: MinaCornerUpRightProps): React.ReactElement;
export default MinaCornerUpRight;
