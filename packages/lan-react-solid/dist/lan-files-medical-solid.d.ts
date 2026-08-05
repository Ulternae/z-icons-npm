import React from 'react';

export interface LanFilesMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilesMedicalSolid(props: LanFilesMedicalSolidProps): React.ReactElement;
export default LanFilesMedicalSolid;
