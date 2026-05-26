import React from 'react';

export interface LanThoughtBubbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThoughtBubble: React.FC<LanThoughtBubbleProps>;
export default LanThoughtBubble;
