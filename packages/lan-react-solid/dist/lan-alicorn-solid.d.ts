import React from 'react';

export interface LanAlicornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlicornSolid(props: LanAlicornSolidProps): React.ReactElement;
export default LanAlicornSolid;
