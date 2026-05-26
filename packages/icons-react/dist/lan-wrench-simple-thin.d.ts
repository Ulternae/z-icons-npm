import React from 'react';

export interface LanWrenchSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWrenchSimpleThin: React.FC<LanWrenchSimpleThinProps>;
export default LanWrenchSimpleThin;
