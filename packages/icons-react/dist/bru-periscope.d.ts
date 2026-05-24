import React from 'react';

export interface BruPeriscopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPeriscope: React.FC<BruPeriscopeProps>;
export default BruPeriscope;
