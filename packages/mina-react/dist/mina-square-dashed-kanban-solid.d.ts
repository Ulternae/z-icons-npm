import React from 'react';

export interface MinaSquareDashedKanbanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSquareDashedKanbanSolid(props: MinaSquareDashedKanbanSolidProps): React.ReactElement;
export default MinaSquareDashedKanbanSolid;
