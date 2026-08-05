import React from 'react';

export interface LanBoxArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxArrowDown(props: LanBoxArrowDownProps): React.ReactElement;
export default LanBoxArrowDown;
