import React from 'react';

export interface LanHexagonDivideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonDivideRegular: React.FC<LanHexagonDivideRegularProps>;
export default LanHexagonDivideRegular;
