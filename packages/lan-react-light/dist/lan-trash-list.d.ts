import React from 'react';

export interface LanTrashListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashList(props: LanTrashListProps): React.ReactElement;
export default LanTrashList;
