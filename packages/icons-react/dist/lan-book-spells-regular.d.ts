import React from 'react';

export interface LanBookSpellsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookSpellsRegular: React.FC<LanBookSpellsRegularProps>;
export default LanBookSpellsRegular;
