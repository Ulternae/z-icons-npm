import React from 'react';

export interface CoreCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCheck: React.FC<CoreCheckProps>;
export default CoreCheck;
