import React from 'react';

export interface LanHandLizardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandLizardRegular(props: LanHandLizardRegularProps): React.ReactElement;
export default LanHandLizardRegular;
