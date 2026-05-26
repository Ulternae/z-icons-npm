import React from 'react';

export interface LanCloseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloseThin: React.FC<LanCloseThinProps>;
export default LanCloseThin;
