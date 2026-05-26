import React from 'react';

export interface LanFileCssThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCssThin: React.FC<LanFileCssThinProps>;
export default LanFileCssThin;
