import React from 'react';

export interface LanBabySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBabySolid(props: LanBabySolidProps): React.ReactElement;
export default LanBabySolid;
