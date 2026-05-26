import React from 'react';

export interface LanFaceTiredProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceTired: React.FC<LanFaceTiredProps>;
export default LanFaceTired;
