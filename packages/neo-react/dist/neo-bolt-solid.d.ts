import React from 'react';

export interface NeoBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBoltSolid(props: NeoBoltSolidProps): React.ReactElement;
export default NeoBoltSolid;
