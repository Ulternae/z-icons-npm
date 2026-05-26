import React from 'react';

export interface LanBoxesAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxesAltRegular: React.FC<LanBoxesAltRegularProps>;
export default LanBoxesAltRegular;
