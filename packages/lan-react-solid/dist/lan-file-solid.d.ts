import React from 'react';

export interface LanFileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSolid(props: LanFileSolidProps): React.ReactElement;
export default LanFileSolid;
