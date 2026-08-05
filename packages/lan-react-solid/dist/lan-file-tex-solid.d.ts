import React from 'react';

export interface LanFileTexSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileTexSolid(props: LanFileTexSolidProps): React.ReactElement;
export default LanFileTexSolid;
