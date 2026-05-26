import React from 'react';

export interface LanFilePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePlusThin: React.FC<LanFilePlusThinProps>;
export default LanFilePlusThin;
