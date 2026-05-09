import React from 'react';

export interface MinaFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlag: React.FC<MinaFlagProps>;
export default MinaFlag;
