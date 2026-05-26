import React from 'react';

export interface LanHandHoldingMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingMedicalSolid: React.FC<LanHandHoldingMedicalSolidProps>;
export default LanHandHoldingMedicalSolid;
