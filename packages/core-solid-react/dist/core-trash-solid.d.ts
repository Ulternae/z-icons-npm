import React from 'react';

export interface CoreTrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTrashSolid(props: CoreTrashSolidProps): React.ReactElement;
export default CoreTrashSolid;
