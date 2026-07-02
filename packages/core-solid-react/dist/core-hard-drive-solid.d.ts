import React from 'react';

export interface CoreHardDriveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHardDriveSolid(props: CoreHardDriveSolidProps): React.ReactElement;
export default CoreHardDriveSolid;
