import React from 'react';

export interface MinaSquareKanbanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSquareKanbanSolid(props: MinaSquareKanbanSolidProps): React.ReactElement;
export default MinaSquareKanbanSolid;
