import React from 'react';

export interface BruGlobaleaksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGlobaleaks: React.FC<BruGlobaleaksProps>;
export default BruGlobaleaks;
