import React from 'react';

export interface LanTrashCanListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanList(props: LanTrashCanListProps): React.ReactElement;
export default LanTrashCanList;
