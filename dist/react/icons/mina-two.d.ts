import React from 'react';

export interface MinaTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwo: React.FC<MinaTwoProps>;
export default MinaTwo;
