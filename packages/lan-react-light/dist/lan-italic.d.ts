import React from 'react';

export interface LanItalicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanItalic(props: LanItalicProps): React.ReactElement;
export default LanItalic;
