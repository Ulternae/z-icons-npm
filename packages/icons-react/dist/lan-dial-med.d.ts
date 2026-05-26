import React from 'react';

export interface LanDialMedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMed: React.FC<LanDialMedProps>;
export default LanDialMed;
