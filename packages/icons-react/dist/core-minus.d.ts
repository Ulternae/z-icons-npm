import React from 'react';

export interface CoreMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMinus: React.FC<CoreMinusProps>;
export default CoreMinus;
