import React from 'react';

export interface MinaTagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTag: React.FC<MinaTagProps>;
export default MinaTag;
