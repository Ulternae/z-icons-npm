import React from 'react';

export interface MinaArrowLeftRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaArrowLeftRight(props: MinaArrowLeftRightProps): React.ReactElement;
export default MinaArrowLeftRight;
