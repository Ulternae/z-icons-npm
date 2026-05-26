import React from 'react';

export interface LanSpellCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpellCheckRegular: React.FC<LanSpellCheckRegularProps>;
export default LanSpellCheckRegular;
