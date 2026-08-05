import React from 'react';

export interface LanBacteriumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBacteriumSolid(props: LanBacteriumSolidProps): React.ReactElement;
export default LanBacteriumSolid;
