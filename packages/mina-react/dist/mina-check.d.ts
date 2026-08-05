import React from 'react';

export interface MinaCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheck(props: MinaCheckProps): React.ReactElement;
export default MinaCheck;
