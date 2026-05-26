import React from 'react';

export interface LanCircleDivideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDivideRegular: React.FC<LanCircleDivideRegularProps>;
export default LanCircleDivideRegular;
