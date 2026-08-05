import React from 'react';

export interface LanFishFinsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishFinsSolid(props: LanFishFinsSolidProps): React.ReactElement;
export default LanFishFinsSolid;
