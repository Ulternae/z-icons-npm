import React from 'react';

export interface LanEllipsisVRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEllipsisVRegular: React.FC<LanEllipsisVRegularProps>;
export default LanEllipsisVRegular;
