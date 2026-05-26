import React from 'react';

export interface LanSneakerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSneaker: React.FC<LanSneakerProps>;
export default LanSneaker;
