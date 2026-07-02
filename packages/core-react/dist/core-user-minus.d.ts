import React from 'react';

export interface CoreUserMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUserMinus(props: CoreUserMinusProps): React.ReactElement;
export default CoreUserMinus;
