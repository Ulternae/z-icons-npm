import React from 'react';

export interface LanBoxArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxArrowUp(props: LanBoxArrowUpProps): React.ReactElement;
export default LanBoxArrowUp;
