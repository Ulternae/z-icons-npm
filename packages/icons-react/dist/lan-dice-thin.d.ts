import React from 'react';

export interface LanDiceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceThin: React.FC<LanDiceThinProps>;
export default LanDiceThin;
