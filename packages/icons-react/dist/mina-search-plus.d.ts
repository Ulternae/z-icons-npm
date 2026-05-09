import React from 'react';

export interface MinaSearchPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchPlus: React.FC<MinaSearchPlusProps>;
export default MinaSearchPlus;
