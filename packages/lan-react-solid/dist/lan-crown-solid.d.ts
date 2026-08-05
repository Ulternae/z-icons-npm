import React from 'react';

export interface LanCrownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrownSolid(props: LanCrownSolidProps): React.ReactElement;
export default LanCrownSolid;
