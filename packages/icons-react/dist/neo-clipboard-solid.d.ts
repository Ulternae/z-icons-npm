import React from 'react';

export interface NeoClipboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoClipboardSolid: React.FC<NeoClipboardSolidProps>;
export default NeoClipboardSolid;
