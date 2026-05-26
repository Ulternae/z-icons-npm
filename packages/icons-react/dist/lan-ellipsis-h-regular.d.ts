import React from 'react';

export interface LanEllipsisHRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEllipsisHRegular: React.FC<LanEllipsisHRegularProps>;
export default LanEllipsisHRegular;
