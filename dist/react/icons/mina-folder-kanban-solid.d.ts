import React from 'react';

export interface MinaFolderKanbanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderKanbanSolid: React.FC<MinaFolderKanbanSolidProps>;
export default MinaFolderKanbanSolid;
