import React from 'react';

export interface LanFileIcnsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileIcnsThin: React.FC<LanFileIcnsThinProps>;
export default LanFileIcnsThin;
