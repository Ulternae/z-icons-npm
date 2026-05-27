import React from 'react';

export interface CoreClipboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreClipboardSolid: React.FC<CoreClipboardSolidProps>;
export default CoreClipboardSolid;
