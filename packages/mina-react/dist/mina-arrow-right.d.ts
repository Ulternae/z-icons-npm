import React from 'react';

export interface MinaArrowRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaArrowRight(props: MinaArrowRightProps): React.ReactElement;
export default MinaArrowRight;
