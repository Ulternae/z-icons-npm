import React from 'react';

export interface MinaHardDriveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHardDriveSolid(props: MinaHardDriveSolidProps): React.ReactElement;
export default MinaHardDriveSolid;
