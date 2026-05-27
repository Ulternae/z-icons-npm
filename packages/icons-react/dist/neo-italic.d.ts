import React from 'react';

export interface NeoItalicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoItalic: React.FC<NeoItalicProps>;
export default NeoItalic;
