import React from 'react';

export interface MinaMaximizeOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMaximizeOne(props: MinaMaximizeOneProps): React.ReactElement;
export default MinaMaximizeOne;
