import React from 'react';

export interface MinaBookCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookCheck(props: MinaBookCheckProps): React.ReactElement;
export default MinaBookCheck;
