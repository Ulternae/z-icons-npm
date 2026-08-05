import React from 'react';

export interface LanTrashCanCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanCheckSolid(props: LanTrashCanCheckSolidProps): React.ReactElement;
export default LanTrashCanCheckSolid;
