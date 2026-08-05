import React from 'react';

export interface MinaTrashTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTrashTwo(props: MinaTrashTwoProps): React.ReactElement;
export default MinaTrashTwo;
