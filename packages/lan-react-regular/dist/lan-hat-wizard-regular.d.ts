import React from 'react';

export interface LanHatWizardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatWizardRegular(props: LanHatWizardRegularProps): React.ReactElement;
export default LanHatWizardRegular;
