import React from 'react';

export interface LanCarWrenchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarWrenchSolid(props: LanCarWrenchSolidProps): React.ReactElement;
export default LanCarWrenchSolid;
