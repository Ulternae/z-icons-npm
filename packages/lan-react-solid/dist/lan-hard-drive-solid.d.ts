import React from 'react';

export interface LanHardDriveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHardDriveSolid(props: LanHardDriveSolidProps): React.ReactElement;
export default LanHardDriveSolid;
