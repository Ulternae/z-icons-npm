import React from 'react';

export interface MinaFolderKanbanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderKanban: React.FC<MinaFolderKanbanProps>;
export default MinaFolderKanban;
