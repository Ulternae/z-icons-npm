import React from 'react';

export interface MinaHeadingThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeadingThree(props: MinaHeadingThreeProps): React.ReactElement;
export default MinaHeadingThree;
