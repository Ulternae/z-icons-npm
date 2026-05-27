import React from 'react';

export interface NeoPaperclipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPaperclipSolid: React.FC<NeoPaperclipSolidProps>;
export default NeoPaperclipSolid;
