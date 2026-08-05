import React from 'react';

export interface MinaTypeItalicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTypeItalic(props: MinaTypeItalicProps): React.ReactElement;
export default MinaTypeItalic;
