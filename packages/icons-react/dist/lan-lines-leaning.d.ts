import React from 'react';

export interface LanLinesLeaningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinesLeaning: React.FC<LanLinesLeaningProps>;
export default LanLinesLeaning;
