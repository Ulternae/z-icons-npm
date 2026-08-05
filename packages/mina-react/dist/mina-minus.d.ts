import React from 'react';

export interface MinaMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinus(props: MinaMinusProps): React.ReactElement;
export default MinaMinus;
