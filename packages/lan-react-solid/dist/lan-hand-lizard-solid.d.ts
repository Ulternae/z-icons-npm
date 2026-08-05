import React from 'react';

export interface LanHandLizardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandLizardSolid(props: LanHandLizardSolidProps): React.ReactElement;
export default LanHandLizardSolid;
