import React from 'react';

export interface MinaSquareDashedKanbanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSquareDashedKanbanSolid: React.FC<MinaSquareDashedKanbanSolidProps>;
export default MinaSquareDashedKanbanSolid;
