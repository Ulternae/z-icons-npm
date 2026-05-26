import React from 'react';

export interface LanLabelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLabelRegular: React.FC<LanLabelRegularProps>;
export default LanLabelRegular;
