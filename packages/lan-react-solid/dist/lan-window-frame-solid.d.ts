import React from 'react';

export interface LanWindowFrameSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowFrameSolid(props: LanWindowFrameSolidProps): React.ReactElement;
export default LanWindowFrameSolid;
