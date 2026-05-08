import React from 'react';

export interface MinaRefreshProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRefresh: React.FC<MinaRefreshProps>;
export default MinaRefresh;
