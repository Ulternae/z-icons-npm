import React from 'react';

export interface MinaTrashOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTrashOneSolid(props: MinaTrashOneSolidProps): React.ReactElement;
export default MinaTrashOneSolid;
