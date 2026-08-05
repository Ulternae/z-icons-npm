import React from 'react';

export interface LanSquareBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBoltSolid(props: LanSquareBoltSolidProps): React.ReactElement;
export default LanSquareBoltSolid;
