import React from 'react';

export interface LanSneakerRunningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSneakerRunningSolid(props: LanSneakerRunningSolidProps): React.ReactElement;
export default LanSneakerRunningSolid;
