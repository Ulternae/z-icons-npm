import React from 'react';

export interface MinaSubtractProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSubtract(props: MinaSubtractProps): React.ReactElement;
export default MinaSubtract;
