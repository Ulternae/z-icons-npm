import React from 'react';

export interface LanDumbbellRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDumbbellRegular: React.FC<LanDumbbellRegularProps>;
export default LanDumbbellRegular;
