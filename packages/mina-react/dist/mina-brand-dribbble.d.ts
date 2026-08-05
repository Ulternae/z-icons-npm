import React from 'react';

export interface MinaBrandDribbbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandDribbble(props: MinaBrandDribbbleProps): React.ReactElement;
export default MinaBrandDribbble;
