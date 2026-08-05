import React from 'react';

export interface LanFileMovSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMovSolid(props: LanFileMovSolidProps): React.ReactElement;
export default LanFileMovSolid;
