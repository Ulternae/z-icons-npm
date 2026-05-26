import React from 'react';

export interface LanFilesMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilesMedicalRegular: React.FC<LanFilesMedicalRegularProps>;
export default LanFilesMedicalRegular;
