import React from 'react';

export interface MinaCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCode: React.FC<MinaCodeProps>;
export default MinaCode;
