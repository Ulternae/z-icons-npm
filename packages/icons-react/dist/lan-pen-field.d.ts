import React from 'react';

export interface LanPenFieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenField: React.FC<LanPenFieldProps>;
export default LanPenField;
