import React from 'react';

export interface LanMemorySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemorySolid: React.FC<LanMemorySolidProps>;
export default LanMemorySolid;
