import React from 'react';

export interface LanVideoDownToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoDownToLine: React.FC<LanVideoDownToLineProps>;
export default LanVideoDownToLine;
