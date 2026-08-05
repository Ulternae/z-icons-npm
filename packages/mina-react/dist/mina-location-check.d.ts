import React from 'react';

export interface MinaLocationCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationCheck(props: MinaLocationCheckProps): React.ReactElement;
export default MinaLocationCheck;
