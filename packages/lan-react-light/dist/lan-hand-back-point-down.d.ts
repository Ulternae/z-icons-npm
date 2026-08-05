import React from 'react';

export interface LanHandBackPointDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandBackPointDown(props: LanHandBackPointDownProps): React.ReactElement;
export default LanHandBackPointDown;
