import React from 'react';

export interface CoreFillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFill(props: CoreFillProps): React.ReactElement;
export default CoreFill;
