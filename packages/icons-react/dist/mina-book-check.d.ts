import React from 'react';

export interface MinaBookCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookCheck: React.FC<MinaBookCheckProps>;
export default MinaBookCheck;
