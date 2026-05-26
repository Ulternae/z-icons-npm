import React from 'react';

export interface LanTurtleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurtleThin: React.FC<LanTurtleThinProps>;
export default LanTurtleThin;
