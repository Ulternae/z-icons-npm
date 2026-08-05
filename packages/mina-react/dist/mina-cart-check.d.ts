import React from 'react';

export interface MinaCartCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCartCheck(props: MinaCartCheckProps): React.ReactElement;
export default MinaCartCheck;
