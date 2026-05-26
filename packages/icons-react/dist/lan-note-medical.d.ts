import React from 'react';

export interface LanNoteMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoteMedical: React.FC<LanNoteMedicalProps>;
export default LanNoteMedical;
