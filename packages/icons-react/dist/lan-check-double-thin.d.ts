import React from 'react';

export interface LanCheckDoubleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckDoubleThin: React.FC<LanCheckDoubleThinProps>;
export default LanCheckDoubleThin;
