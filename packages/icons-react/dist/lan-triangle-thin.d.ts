import React from 'react';

export interface LanTriangleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTriangleThin: React.FC<LanTriangleThinProps>;
export default LanTriangleThin;
