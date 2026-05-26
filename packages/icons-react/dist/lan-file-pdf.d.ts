import React from 'react';

export interface LanFilePdfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePdf: React.FC<LanFilePdfProps>;
export default LanFilePdf;
