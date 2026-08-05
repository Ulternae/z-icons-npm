import React from 'react';

export interface NeoBedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBedSolid(props: NeoBedSolidProps): React.ReactElement;
export default NeoBedSolid;
