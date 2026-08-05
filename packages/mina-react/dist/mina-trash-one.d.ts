import React from 'react';

export interface MinaTrashOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTrashOne(props: MinaTrashOneProps): React.ReactElement;
export default MinaTrashOne;
