import React from 'react';

export interface LanLineColumnsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLineColumns: React.FC<LanLineColumnsProps>;
export default LanLineColumns;
