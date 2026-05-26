import React from 'react';

export interface LanFilePngThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePngThin: React.FC<LanFilePngThinProps>;
export default LanFilePngThin;
