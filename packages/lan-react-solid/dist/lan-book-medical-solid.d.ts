import React from 'react';

export interface LanBookMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookMedicalSolid(props: LanBookMedicalSolidProps): React.ReactElement;
export default LanBookMedicalSolid;
