import React from 'react';

export interface LanCrutchesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrutches: React.FC<LanCrutchesProps>;
export default LanCrutches;
