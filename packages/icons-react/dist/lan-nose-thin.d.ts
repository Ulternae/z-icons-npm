import React from 'react';

export interface LanNoseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoseThin: React.FC<LanNoseThinProps>;
export default LanNoseThin;
