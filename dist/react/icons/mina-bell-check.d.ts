import React from 'react';

export interface MinaBellCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellCheck: React.FC<MinaBellCheckProps>;
export default MinaBellCheck;
