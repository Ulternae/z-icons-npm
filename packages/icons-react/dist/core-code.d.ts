import React from 'react';

export interface CoreCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCode: React.FC<CoreCodeProps>;
export default CoreCode;
