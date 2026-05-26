import React from 'react';

export interface LanSpellCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpellCheck: React.FC<LanSpellCheckProps>;
export default LanSpellCheck;
