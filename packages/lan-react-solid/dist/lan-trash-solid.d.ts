import React from 'react';

export interface LanTrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashSolid(props: LanTrashSolidProps): React.ReactElement;
export default LanTrashSolid;
