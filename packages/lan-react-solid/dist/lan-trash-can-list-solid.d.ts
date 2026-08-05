import React from 'react';

export interface LanTrashCanListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanListSolid(props: LanTrashCanListSolidProps): React.ReactElement;
export default LanTrashCanListSolid;
