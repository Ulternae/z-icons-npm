import React from 'react';

export interface LanFileCadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCadThin: React.FC<LanFileCadThinProps>;
export default LanFileCadThin;
