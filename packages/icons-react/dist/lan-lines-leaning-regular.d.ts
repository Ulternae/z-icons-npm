import React from 'react';

export interface LanLinesLeaningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinesLeaningRegular: React.FC<LanLinesLeaningRegularProps>;
export default LanLinesLeaningRegular;
