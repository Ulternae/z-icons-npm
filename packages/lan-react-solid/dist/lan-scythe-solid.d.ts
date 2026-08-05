import React from 'react';

export interface LanScytheSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScytheSolid(props: LanScytheSolidProps): React.ReactElement;
export default LanScytheSolid;
