import React from 'react';

export interface LanHandLizardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandLizardRegular: React.FC<LanHandLizardRegularProps>;
export default LanHandLizardRegular;
