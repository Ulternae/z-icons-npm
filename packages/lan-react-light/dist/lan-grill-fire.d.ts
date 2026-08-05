import React from 'react';

export interface LanGrillFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrillFire(props: LanGrillFireProps): React.ReactElement;
export default LanGrillFire;
