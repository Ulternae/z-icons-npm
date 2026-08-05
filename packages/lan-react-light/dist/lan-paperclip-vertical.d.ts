import React from 'react';

export interface LanPaperclipVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperclipVertical(props: LanPaperclipVerticalProps): React.ReactElement;
export default LanPaperclipVertical;
