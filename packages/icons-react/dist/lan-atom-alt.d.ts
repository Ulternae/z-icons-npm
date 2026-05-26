import React from 'react';

export interface LanAtomAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAtomAlt: React.FC<LanAtomAltProps>;
export default LanAtomAlt;
