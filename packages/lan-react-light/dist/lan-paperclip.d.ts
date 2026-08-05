import React from 'react';

export interface LanPaperclipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperclip(props: LanPaperclipProps): React.ReactElement;
export default LanPaperclip;
