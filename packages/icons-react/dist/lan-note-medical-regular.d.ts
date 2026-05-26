import React from 'react';

export interface LanNoteMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoteMedicalRegular: React.FC<LanNoteMedicalRegularProps>;
export default LanNoteMedicalRegular;
