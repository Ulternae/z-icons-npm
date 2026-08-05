import React from 'react';

export interface NeoTrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTrashSolid(props: NeoTrashSolidProps): React.ReactElement;
export default NeoTrashSolid;
