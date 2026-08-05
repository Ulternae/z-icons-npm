import React from 'react';

export interface LanFaceFrownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceFrownSolid(props: LanFaceFrownSolidProps): React.ReactElement;
export default LanFaceFrownSolid;
