import React from 'react';

export interface MinaHeadingOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeadingOne(props: MinaHeadingOneProps): React.ReactElement;
export default MinaHeadingOne;
