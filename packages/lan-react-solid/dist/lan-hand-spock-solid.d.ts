import React from 'react';

export interface LanHandSpockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandSpockSolid(props: LanHandSpockSolidProps): React.ReactElement;
export default LanHandSpockSolid;
