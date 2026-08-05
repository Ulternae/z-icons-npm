import React from 'react';

export interface LanFortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFortSolid(props: LanFortSolidProps): React.ReactElement;
export default LanFortSolid;
