import React from 'react';

export interface LanTrashCanPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanPlusSolid(props: LanTrashCanPlusSolidProps): React.ReactElement;
export default LanTrashCanPlusSolid;
