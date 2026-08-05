import React from 'react';

export interface LanBrainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrainSolid(props: LanBrainSolidProps): React.ReactElement;
export default LanBrainSolid;
