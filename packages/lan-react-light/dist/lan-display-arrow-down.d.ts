import React from 'react';

export interface LanDisplayArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDisplayArrowDown(props: LanDisplayArrowDownProps): React.ReactElement;
export default LanDisplayArrowDown;
