import React from 'react';

export interface CoreClipboardCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreClipboardCheckSolid: React.FC<CoreClipboardCheckSolidProps>;
export default CoreClipboardCheckSolid;
