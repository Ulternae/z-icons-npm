import React from 'react';

export interface NeoBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBolt: React.FC<NeoBoltProps>;
export default NeoBolt;
