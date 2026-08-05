import React from 'react';

export interface LanFrogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrogSolid(props: LanFrogSolidProps): React.ReactElement;
export default LanFrogSolid;
