import React from 'react';

export interface NeoItalicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoItalic(props: NeoItalicProps): React.ReactElement;
export default NeoItalic;
