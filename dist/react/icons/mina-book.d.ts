import React from 'react';

export interface MinaBookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBook: React.FC<MinaBookProps>;
export default MinaBook;
