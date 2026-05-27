import React from 'react';

export interface CorePaperclipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaperclipSolid: React.FC<CorePaperclipSolidProps>;
export default CorePaperclipSolid;
