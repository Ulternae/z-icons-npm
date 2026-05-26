import React from 'react';

export interface LanExpandWideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExpandWideRegular: React.FC<LanExpandWideRegularProps>;
export default LanExpandWideRegular;
