import React from 'react';

export interface BruGravProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGrav: React.FC<BruGravProps>;
export default BruGrav;
