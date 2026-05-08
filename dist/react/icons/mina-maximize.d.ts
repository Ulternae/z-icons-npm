import React from 'react';

export interface MinaMaximizeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMaximize: React.FC<MinaMaximizeProps>;
export default MinaMaximize;
