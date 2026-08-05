import React from 'react';

export interface LanBookArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookArrowUp(props: LanBookArrowUpProps): React.ReactElement;
export default LanBookArrowUp;
