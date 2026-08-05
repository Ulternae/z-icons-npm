import React from 'react';

export interface MinaBellCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellCheck(props: MinaBellCheckProps): React.ReactElement;
export default MinaBellCheck;
