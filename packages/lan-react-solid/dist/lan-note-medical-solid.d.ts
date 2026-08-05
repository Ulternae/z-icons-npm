import React from 'react';

export interface LanNoteMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoteMedicalSolid(props: LanNoteMedicalSolidProps): React.ReactElement;
export default LanNoteMedicalSolid;
