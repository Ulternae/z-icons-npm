import React from 'react';

export interface LanFishSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishSolid(props: LanFishSolidProps): React.ReactElement;
export default LanFishSolid;
