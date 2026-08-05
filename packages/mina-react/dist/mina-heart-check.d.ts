import React from 'react';

export interface MinaHeartCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartCheck(props: MinaHeartCheckProps): React.ReactElement;
export default MinaHeartCheck;
