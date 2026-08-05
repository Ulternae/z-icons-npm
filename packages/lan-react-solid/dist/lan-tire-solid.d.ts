import React from 'react';

export interface LanTireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTireSolid(props: LanTireSolidProps): React.ReactElement;
export default LanTireSolid;
