import React from 'react';

export interface LanOarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOarsSolid(props: LanOarsSolidProps): React.ReactElement;
export default LanOarsSolid;
