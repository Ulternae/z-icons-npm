import React from 'react';

export interface LanOctagonDivideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonDivideRegular: React.FC<LanOctagonDivideRegularProps>;
export default LanOctagonDivideRegular;
