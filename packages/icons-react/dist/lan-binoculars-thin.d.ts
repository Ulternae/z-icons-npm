import React from 'react';

export interface LanBinocularsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinocularsThin: React.FC<LanBinocularsThinProps>;
export default LanBinocularsThin;
