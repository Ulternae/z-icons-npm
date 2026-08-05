import React from 'react';

export interface LanBlanketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlanketSolid(props: LanBlanketSolidProps): React.ReactElement;
export default LanBlanketSolid;
