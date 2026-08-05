import React from 'react';

export interface LanCodeSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeSimpleSolid(props: LanCodeSimpleSolidProps): React.ReactElement;
export default LanCodeSimpleSolid;
