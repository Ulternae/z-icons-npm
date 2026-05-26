import React from 'react';

export interface LanObjectsColumnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectsColumnRegular: React.FC<LanObjectsColumnRegularProps>;
export default LanObjectsColumnRegular;
