import React from 'react';

export interface BruGoogleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGoogle: React.FC<BruGoogleProps>;
export default BruGoogle;
