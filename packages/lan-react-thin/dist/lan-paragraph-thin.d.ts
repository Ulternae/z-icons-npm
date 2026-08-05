import React from 'react';

export interface LanParagraphThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanParagraphThin(props: LanParagraphThinProps): React.ReactElement;
export default LanParagraphThin;
