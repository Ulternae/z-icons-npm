import React from 'react';

export interface LanBeeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBeeSolid(props: LanBeeSolidProps): React.ReactElement;
export default LanBeeSolid;
