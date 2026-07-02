import React from 'react';

export interface CoreMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMinus(props: CoreMinusProps): React.ReactElement;
export default CoreMinus;
