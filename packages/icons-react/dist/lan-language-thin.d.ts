import React from 'react';

export interface LanLanguageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLanguageThin: React.FC<LanLanguageThinProps>;
export default LanLanguageThin;
