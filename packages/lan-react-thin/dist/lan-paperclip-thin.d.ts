import React from 'react';

export interface LanPaperclipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperclipThin(props: LanPaperclipThinProps): React.ReactElement;
export default LanPaperclipThin;
