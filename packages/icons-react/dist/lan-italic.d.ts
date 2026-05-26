import React from 'react';

export interface LanItalicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanItalic: React.FC<LanItalicProps>;
export default LanItalic;
