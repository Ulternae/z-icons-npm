import React from 'react';

export interface LanAccentGraveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAccentGraveThin: React.FC<LanAccentGraveThinProps>;
export default LanAccentGraveThin;
