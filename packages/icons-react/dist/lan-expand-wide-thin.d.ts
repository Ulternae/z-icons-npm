import React from 'react';

export interface LanExpandWideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExpandWideThin: React.FC<LanExpandWideThinProps>;
export default LanExpandWideThin;
