import React from 'react';

export interface LanSquareKanbanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareKanbanSolid(props: LanSquareKanbanSolidProps): React.ReactElement;
export default LanSquareKanbanSolid;
