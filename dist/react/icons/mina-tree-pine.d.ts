import React from 'react';

export interface MinaTreePineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTreePine: React.FC<MinaTreePineProps>;
export default MinaTreePine;
