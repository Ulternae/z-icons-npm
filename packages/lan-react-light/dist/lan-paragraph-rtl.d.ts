import React from 'react';

export interface LanParagraphRtlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanParagraphRtl(props: LanParagraphRtlProps): React.ReactElement;
export default LanParagraphRtl;
