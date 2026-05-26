import React from 'react';

export interface LanChildDressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildDress: React.FC<LanChildDressProps>;
export default LanChildDress;
