import React from 'react';

export interface LanAnkhRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnkhRegular: React.FC<LanAnkhRegularProps>;
export default LanAnkhRegular;
