import React from 'react';

export interface BruGlideGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGlideG: React.FC<BruGlideGProps>;
export default BruGlideG;
