import React from 'react';

export interface LanSignLanguageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignLanguageThin: React.FC<LanSignLanguageThinProps>;
export default LanSignLanguageThin;
