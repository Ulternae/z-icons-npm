import React from 'react';

export interface LanThoughtBubbleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThoughtBubbleThin(props: LanThoughtBubbleThinProps): React.ReactElement;
export default LanThoughtBubbleThin;
