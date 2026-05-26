import React from 'react';

export interface LanBooksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBooksRegular: React.FC<LanBooksRegularProps>;
export default LanBooksRegular;
