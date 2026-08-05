import React from 'react';

export interface MinaFolderKanbanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderKanban(props: MinaFolderKanbanProps): React.ReactElement;
export default MinaFolderKanban;
