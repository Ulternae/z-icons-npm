import React from 'react';

export interface NeoBoldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBoldSolid(props: NeoBoldSolidProps): React.ReactElement;
export default NeoBoldSolid;
