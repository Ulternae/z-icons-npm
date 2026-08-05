import React from 'react';

export interface MinaHeadingTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeadingTwo(props: MinaHeadingTwoProps): React.ReactElement;
export default MinaHeadingTwo;
