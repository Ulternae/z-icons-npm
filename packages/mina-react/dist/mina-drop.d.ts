import React from 'react';

export interface MinaDropProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDrop(props: MinaDropProps): React.ReactElement;
export default MinaDrop;
