import React from 'react';

export interface MinaTagPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTagPlus: React.FC<MinaTagPlusProps>;
export default MinaTagPlus;
