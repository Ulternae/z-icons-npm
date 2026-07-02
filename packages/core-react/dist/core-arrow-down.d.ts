import React from 'react';

export interface CoreArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreArrowDown(props: CoreArrowDownProps): React.ReactElement;
export default CoreArrowDown;
