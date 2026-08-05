import React from 'react';

export interface LanBarProgressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressSolid(props: LanBarProgressSolidProps): React.ReactElement;
export default LanBarProgressSolid;
