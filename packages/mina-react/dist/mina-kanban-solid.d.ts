import React from 'react';

export interface MinaKanbanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaKanbanSolid(props: MinaKanbanSolidProps): React.ReactElement;
export default MinaKanbanSolid;
