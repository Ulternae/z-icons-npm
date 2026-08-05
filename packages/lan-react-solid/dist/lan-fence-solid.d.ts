import React from 'react';

export interface LanFenceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFenceSolid(props: LanFenceSolidProps): React.ReactElement;
export default LanFenceSolid;
