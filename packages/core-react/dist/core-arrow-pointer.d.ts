import React from 'react';

export interface CoreArrowPointerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreArrowPointer(props: CoreArrowPointerProps): React.ReactElement;
export default CoreArrowPointer;
