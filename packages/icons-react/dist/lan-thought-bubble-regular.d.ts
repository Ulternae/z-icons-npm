import React from 'react';

export interface LanThoughtBubbleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThoughtBubbleRegular: React.FC<LanThoughtBubbleRegularProps>;
export default LanThoughtBubbleRegular;
