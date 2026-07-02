import React from 'react';

export interface CoreArrowLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreArrowLeft(props: CoreArrowLeftProps): React.ReactElement;
export default CoreArrowLeft;
