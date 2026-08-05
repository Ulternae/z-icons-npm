import React from 'react';

export interface LanHillAvalancheSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHillAvalancheSolid(props: LanHillAvalancheSolidProps): React.ReactElement;
export default LanHillAvalancheSolid;
