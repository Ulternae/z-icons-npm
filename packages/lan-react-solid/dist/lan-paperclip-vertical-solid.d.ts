import React from 'react';

export interface LanPaperclipVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperclipVerticalSolid(props: LanPaperclipVerticalSolidProps): React.ReactElement;
export default LanPaperclipVerticalSolid;
