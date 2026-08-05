import React from 'react';

export interface MinaTallyOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTallyOne(props: MinaTallyOneProps): React.ReactElement;
export default MinaTallyOne;
