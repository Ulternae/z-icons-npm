import React from 'react';

export interface CoreBoldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBold: React.FC<CoreBoldProps>;
export default CoreBold;
