import React from 'react';

export interface LanDownUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownUpSolid(props: LanDownUpSolidProps): React.ReactElement;
export default LanDownUpSolid;
