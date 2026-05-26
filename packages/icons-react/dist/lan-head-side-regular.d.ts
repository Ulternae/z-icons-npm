import React from 'react';

export interface LanHeadSideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideRegular: React.FC<LanHeadSideRegularProps>;
export default LanHeadSideRegular;
