import React from 'react';

export interface LanCarrotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarrotSolid(props: LanCarrotSolidProps): React.ReactElement;
export default LanCarrotSolid;
