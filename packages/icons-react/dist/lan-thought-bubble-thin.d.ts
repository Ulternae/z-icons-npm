import React from 'react';

export interface LanThoughtBubbleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThoughtBubbleThin: React.FC<LanThoughtBubbleThinProps>;
export default LanThoughtBubbleThin;
