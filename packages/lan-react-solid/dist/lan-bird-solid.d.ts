import React from 'react';

export interface LanBirdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBirdSolid(props: LanBirdSolidProps): React.ReactElement;
export default LanBirdSolid;
