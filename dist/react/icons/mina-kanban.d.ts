import React from 'react';

export interface MinaKanbanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaKanban: React.FC<MinaKanbanProps>;
export default MinaKanban;
