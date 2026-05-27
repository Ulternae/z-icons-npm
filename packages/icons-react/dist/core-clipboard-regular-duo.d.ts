import React from 'react';

export interface CoreClipboardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreClipboardRegularDuo: React.FC<CoreClipboardRegularDuoProps>;
export default CoreClipboardRegularDuo;
