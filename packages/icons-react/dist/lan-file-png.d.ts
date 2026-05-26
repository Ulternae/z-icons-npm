import React from 'react';

export interface LanFilePngProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePng: React.FC<LanFilePngProps>;
export default LanFilePng;
