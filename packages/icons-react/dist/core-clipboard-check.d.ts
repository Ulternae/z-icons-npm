import React from 'react';

export interface CoreClipboardCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreClipboardCheck: React.FC<CoreClipboardCheckProps>;
export default CoreClipboardCheck;
