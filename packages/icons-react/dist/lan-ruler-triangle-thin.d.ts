import React from 'react';

export interface LanRulerTriangleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerTriangleThin: React.FC<LanRulerTriangleThinProps>;
export default LanRulerTriangleThin;
