import React from 'react';

export interface MinaSunMediumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSunMedium(props: MinaSunMediumProps): React.ReactElement;
export default MinaSunMedium;
