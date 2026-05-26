import React from 'react';

export interface LanBooksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBooks: React.FC<LanBooksProps>;
export default LanBooks;
