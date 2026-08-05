import React from 'react';

export interface LanArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowUp(props: LanArrowUpProps): React.ReactElement;
export default LanArrowUp;
