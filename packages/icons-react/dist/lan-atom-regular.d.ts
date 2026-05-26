import React from 'react';

export interface LanAtomRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAtomRegular: React.FC<LanAtomRegularProps>;
export default LanAtomRegular;
