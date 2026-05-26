import React from 'react';

export interface LanMarsDoubleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsDoubleThin: React.FC<LanMarsDoubleThinProps>;
export default LanMarsDoubleThin;
