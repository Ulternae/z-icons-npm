import React from 'react';

export interface LanBowArcherySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowArcherySolid(props: LanBowArcherySolidProps): React.ReactElement;
export default LanBowArcherySolid;
