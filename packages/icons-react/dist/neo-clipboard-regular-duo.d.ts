import React from 'react';

export interface NeoClipboardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoClipboardRegularDuo: React.FC<NeoClipboardRegularDuoProps>;
export default NeoClipboardRegularDuo;
