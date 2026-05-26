import React from 'react';

export interface LanFrogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrog: React.FC<LanFrogProps>;
export default LanFrog;
