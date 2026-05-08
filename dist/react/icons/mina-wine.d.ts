import React from 'react';

export interface MinaWineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWine: React.FC<MinaWineProps>;
export default MinaWine;
