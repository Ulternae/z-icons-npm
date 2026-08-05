import React from 'react';

export interface LanDiscDriveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiscDriveSolid(props: LanDiscDriveSolidProps): React.ReactElement;
export default LanDiscDriveSolid;
