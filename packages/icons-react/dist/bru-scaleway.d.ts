import React from 'react';

export interface BruScalewayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruScaleway: React.FC<BruScalewayProps>;
export default BruScaleway;
