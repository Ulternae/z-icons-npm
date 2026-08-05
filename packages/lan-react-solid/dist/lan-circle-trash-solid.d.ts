import React from 'react';

export interface LanCircleTrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTrashSolid(props: LanCircleTrashSolidProps): React.ReactElement;
export default LanCircleTrashSolid;
