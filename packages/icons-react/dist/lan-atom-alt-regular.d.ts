import React from 'react';

export interface LanAtomAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAtomAltRegular: React.FC<LanAtomAltRegularProps>;
export default LanAtomAltRegular;
