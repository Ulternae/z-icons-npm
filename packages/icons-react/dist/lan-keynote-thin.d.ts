import React from 'react';

export interface LanKeynoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeynoteThin: React.FC<LanKeynoteThinProps>;
export default LanKeynoteThin;
