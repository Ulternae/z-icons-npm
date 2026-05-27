import React from 'react';

export interface CoreBarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBars: React.FC<CoreBarsProps>;
export default CoreBars;
