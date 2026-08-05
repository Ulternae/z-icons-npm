import React from 'react';

export interface MinaFolderKanbanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderKanbanSolid(props: MinaFolderKanbanSolidProps): React.ReactElement;
export default MinaFolderKanbanSolid;
