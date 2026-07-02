import React from 'react';

export interface CoreItalicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreItalic(props: CoreItalicProps): React.ReactElement;
export default CoreItalic;
