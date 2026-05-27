import React from 'react';

export interface NeoBombProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBomb: React.FC<NeoBombProps>;
export default NeoBomb;
