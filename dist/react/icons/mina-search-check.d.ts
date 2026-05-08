import React from 'react';

export interface MinaSearchCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchCheck: React.FC<MinaSearchCheckProps>;
export default MinaSearchCheck;
