import React from 'react';

export interface MinaBrandInstagramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandInstagram: React.FC<MinaBrandInstagramProps>;
export default MinaBrandInstagram;
