import React from 'react';

export interface LanParagraphRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanParagraphRegular(props: LanParagraphRegularProps): React.ReactElement;
export default LanParagraphRegular;
