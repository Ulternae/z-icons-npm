import React from 'react';

export interface LanBooksMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBooksMedicalSolid(props: LanBooksMedicalSolidProps): React.ReactElement;
export default LanBooksMedicalSolid;
