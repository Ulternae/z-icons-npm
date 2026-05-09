import React from 'react';

export interface MinaPaperclipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPaperclipSolid: React.FC<MinaPaperclipSolidProps>;
export default MinaPaperclipSolid;
