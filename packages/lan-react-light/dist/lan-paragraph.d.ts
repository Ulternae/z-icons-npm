import React from 'react';

export interface LanParagraphProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanParagraph(props: LanParagraphProps): React.ReactElement;
export default LanParagraph;
