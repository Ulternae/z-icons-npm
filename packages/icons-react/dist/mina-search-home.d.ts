import React from 'react';

export interface MinaSearchHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchHome: React.FC<MinaSearchHomeProps>;
export default MinaSearchHome;
