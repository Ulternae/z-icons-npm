import React from 'react';

export interface NeoBombSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBombSolid(props: NeoBombSolidProps): React.ReactElement;
export default NeoBombSolid;
