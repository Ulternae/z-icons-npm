import React from 'react';

export interface LanHatWizardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatWizardSolid: React.FC<LanHatWizardSolidProps>;
export default LanHatWizardSolid;
