import React from 'react';

export interface LanHatWizardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatWizardSolid(props: LanHatWizardSolidProps): React.ReactElement;
export default LanHatWizardSolid;
