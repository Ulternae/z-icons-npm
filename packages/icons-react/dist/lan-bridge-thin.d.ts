import React from 'react';

export interface LanBridgeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeThin: React.FC<LanBridgeThinProps>;
export default LanBridgeThin;
