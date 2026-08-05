import React from 'react';

export interface MinaTallyThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTallyThree(props: MinaTallyThreeProps): React.ReactElement;
export default MinaTallyThree;
