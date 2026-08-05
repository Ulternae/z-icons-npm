import React from 'react';

export interface LanBoxingGloveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxingGloveSolid(props: LanBoxingGloveSolidProps): React.ReactElement;
export default LanBoxingGloveSolid;
