import React from 'react';

export interface MinaWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWrench: React.FC<MinaWrenchProps>;
export default MinaWrench;
