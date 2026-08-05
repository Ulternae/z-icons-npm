import React from 'react';

export interface MinaHeadingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeading(props: MinaHeadingProps): React.ReactElement;
export default MinaHeading;
