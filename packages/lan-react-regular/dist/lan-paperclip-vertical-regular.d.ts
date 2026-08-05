import React from 'react';

export interface LanPaperclipVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperclipVerticalRegular(props: LanPaperclipVerticalRegularProps): React.ReactElement;
export default LanPaperclipVerticalRegular;
