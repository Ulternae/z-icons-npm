import React from 'react';

export interface LanSaxophoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSaxophoneThin: React.FC<LanSaxophoneThinProps>;
export default LanSaxophoneThin;
