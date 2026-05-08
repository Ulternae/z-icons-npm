import React from 'react';

export interface MinaSearchXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchX: React.FC<MinaSearchXProps>;
export default MinaSearchX;
