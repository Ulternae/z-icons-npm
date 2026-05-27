import React from 'react';

export interface NeoBookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBook: React.FC<NeoBookProps>;
export default NeoBook;
