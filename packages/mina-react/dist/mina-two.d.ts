import React from 'react';

export interface MinaTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwo(props: MinaTwoProps): React.ReactElement;
export default MinaTwo;
