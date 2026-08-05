import React from 'react';

export interface MinaHeadingFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeadingFour(props: MinaHeadingFourProps): React.ReactElement;
export default MinaHeadingFour;
