import React from 'react';

export interface LanHandBackFistProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandBackFist(props: LanHandBackFistProps): React.ReactElement;
export default LanHandBackFist;
