import React from 'react';

export interface CorePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlus: React.FC<CorePlusProps>;
export default CorePlus;
