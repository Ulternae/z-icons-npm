import React from 'react';

export interface LanFilePdfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePdfThin: React.FC<LanFilePdfThinProps>;
export default LanFilePdfThin;
