import React from 'react';

export interface LanDumbbellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDumbbell: React.FC<LanDumbbellProps>;
export default LanDumbbell;
