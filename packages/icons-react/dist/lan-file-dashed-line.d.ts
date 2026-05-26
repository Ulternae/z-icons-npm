import React from 'react';

export interface LanFileDashedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileDashedLine: React.FC<LanFileDashedLineProps>;
export default LanFileDashedLine;
