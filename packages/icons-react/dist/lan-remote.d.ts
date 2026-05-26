import React from 'react';

export interface LanRemoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRemote: React.FC<LanRemoteProps>;
export default LanRemote;
