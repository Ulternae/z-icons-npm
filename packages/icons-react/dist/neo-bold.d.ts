import React from 'react';

export interface NeoBoldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBold: React.FC<NeoBoldProps>;
export default NeoBold;
