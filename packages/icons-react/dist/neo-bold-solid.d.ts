import React from 'react';

export interface NeoBoldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBoldSolid: React.FC<NeoBoldSolidProps>;
export default NeoBoldSolid;
