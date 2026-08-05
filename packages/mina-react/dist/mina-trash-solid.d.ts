import React from 'react';

export interface MinaTrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTrashSolid(props: MinaTrashSolidProps): React.ReactElement;
export default MinaTrashSolid;
