import React from 'react';

export interface LanPaperclipVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperclipVerticalThin(props: LanPaperclipVerticalThinProps): React.ReactElement;
export default LanPaperclipVerticalThin;
