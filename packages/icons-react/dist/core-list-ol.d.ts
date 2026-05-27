import React from 'react';

export interface CoreListOlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreListOl: React.FC<CoreListOlProps>;
export default CoreListOl;
