import React from 'react';

export interface LanHandBackPointLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandBackPointLeft(props: LanHandBackPointLeftProps): React.ReactElement;
export default LanHandBackPointLeft;
