import React from 'react';

export interface LanFrancSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrancSignSolid(props: LanFrancSignSolidProps): React.ReactElement;
export default LanFrancSignSolid;
