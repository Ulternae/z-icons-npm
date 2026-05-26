import React from 'react';

export interface LanHandLizardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandLizardSolid: React.FC<LanHandLizardSolidProps>;
export default LanHandLizardSolid;
