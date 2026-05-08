import React from 'react';

export interface MinaSquareDashedKanbanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSquareDashedKanban: React.FC<MinaSquareDashedKanbanProps>;
export default MinaSquareDashedKanban;
