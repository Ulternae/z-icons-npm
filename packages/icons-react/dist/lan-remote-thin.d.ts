import React from 'react';

export interface LanRemoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRemoteThin: React.FC<LanRemoteThinProps>;
export default LanRemoteThin;
