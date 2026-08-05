import React from 'react';

export interface LanPaperclipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaperclipSolid(props: LanPaperclipSolidProps): React.ReactElement;
export default LanPaperclipSolid;
