import React from 'react';

export interface MinaKanbanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaKanban(props: MinaKanbanProps): React.ReactElement;
export default MinaKanban;
