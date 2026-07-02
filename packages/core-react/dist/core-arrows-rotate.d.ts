import React from 'react';

export interface CoreArrowsRotateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreArrowsRotate(props: CoreArrowsRotateProps): React.ReactElement;
export default CoreArrowsRotate;
