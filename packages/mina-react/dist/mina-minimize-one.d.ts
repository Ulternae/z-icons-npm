import React from 'react';

export interface MinaMinimizeOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinimizeOne(props: MinaMinimizeOneProps): React.ReactElement;
export default MinaMinimizeOne;
