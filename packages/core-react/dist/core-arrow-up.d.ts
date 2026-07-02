import React from 'react';

export interface CoreArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreArrowUp(props: CoreArrowUpProps): React.ReactElement;
export default CoreArrowUp;
