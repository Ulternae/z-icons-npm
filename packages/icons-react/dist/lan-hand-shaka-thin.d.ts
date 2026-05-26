import React from 'react';

export interface LanHandShakaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandShakaThin: React.FC<LanHandShakaThinProps>;
export default LanHandShakaThin;
