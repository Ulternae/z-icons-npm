import React from 'react';

export interface LanMouseFieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMouseField: React.FC<LanMouseFieldProps>;
export default LanMouseField;
