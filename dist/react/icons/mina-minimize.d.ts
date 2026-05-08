import React from 'react';

export interface MinaMinimizeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinimize: React.FC<MinaMinimizeProps>;
export default MinaMinimize;
