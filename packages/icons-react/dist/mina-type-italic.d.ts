import React from 'react';

export interface MinaTypeItalicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTypeItalic: React.FC<MinaTypeItalicProps>;
export default MinaTypeItalic;
