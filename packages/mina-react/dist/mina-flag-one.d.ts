import React from 'react';

export interface MinaFlagOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlagOne(props: MinaFlagOneProps): React.ReactElement;
export default MinaFlagOne;
