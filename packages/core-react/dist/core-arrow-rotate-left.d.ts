import React from 'react';

export interface CoreArrowRotateLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreArrowRotateLeft(props: CoreArrowRotateLeftProps): React.ReactElement;
export default CoreArrowRotateLeft;
