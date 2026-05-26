import React from 'react';

export interface LanGingerbreadManThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGingerbreadManThin: React.FC<LanGingerbreadManThinProps>;
export default LanGingerbreadManThin;
