import React from 'react';

export interface LanVideoPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoPlusSolid(props: LanVideoPlusSolidProps): React.ReactElement;
export default LanVideoPlusSolid;
