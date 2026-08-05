import React from 'react';

export interface MinaRefreshProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRefresh(props: MinaRefreshProps): React.ReactElement;
export default MinaRefresh;
