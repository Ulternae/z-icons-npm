import React from 'react';

export interface MinaHeartBrokenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartBroken(props: MinaHeartBrokenProps): React.ReactElement;
export default MinaHeartBroken;
