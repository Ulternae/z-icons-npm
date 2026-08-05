import React from 'react';

export interface NeoBellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBellSolid(props: NeoBellSolidProps): React.ReactElement;
export default NeoBellSolid;
