import React from 'react';

export interface LanFileTexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileTex: React.FC<LanFileTexProps>;
export default LanFileTex;
