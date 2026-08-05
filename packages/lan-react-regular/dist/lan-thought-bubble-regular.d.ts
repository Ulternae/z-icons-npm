import React from 'react';

export interface LanThoughtBubbleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThoughtBubbleRegular(props: LanThoughtBubbleRegularProps): React.ReactElement;
export default LanThoughtBubbleRegular;
