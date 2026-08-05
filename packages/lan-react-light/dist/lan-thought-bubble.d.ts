import React from 'react';

export interface LanThoughtBubbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThoughtBubble(props: LanThoughtBubbleProps): React.ReactElement;
export default LanThoughtBubble;
