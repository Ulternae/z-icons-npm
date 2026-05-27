import React from 'react';

export interface CoreBookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBook: React.FC<CoreBookProps>;
export default CoreBook;
