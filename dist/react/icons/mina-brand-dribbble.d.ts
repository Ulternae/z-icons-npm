import React from 'react';

export interface MinaBrandDribbbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandDribbble: React.FC<MinaBrandDribbbleProps>;
export default MinaBrandDribbble;
