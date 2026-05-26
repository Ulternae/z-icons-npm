import React from 'react';

export interface LanCassetteTapeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCassetteTapeThin: React.FC<LanCassetteTapeThinProps>;
export default LanCassetteTapeThin;
