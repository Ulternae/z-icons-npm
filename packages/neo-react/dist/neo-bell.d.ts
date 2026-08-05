import React from 'react';

export interface NeoBellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBell(props: NeoBellProps): React.ReactElement;
export default NeoBell;
