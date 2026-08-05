import React from 'react';

export interface LanBullseyeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullseyeSolid(props: LanBullseyeSolidProps): React.ReactElement;
export default LanBullseyeSolid;
