import React from 'react';

export interface NeoBugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBugSolid(props: NeoBugSolidProps): React.ReactElement;
export default NeoBugSolid;
