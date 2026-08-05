import React from 'react';

export interface LanDialMedLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMedLowSolid(props: LanDialMedLowSolidProps): React.ReactElement;
export default LanDialMedLowSolid;
