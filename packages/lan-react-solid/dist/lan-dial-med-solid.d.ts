import React from 'react';

export interface LanDialMedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMedSolid(props: LanDialMedSolidProps): React.ReactElement;
export default LanDialMedSolid;
