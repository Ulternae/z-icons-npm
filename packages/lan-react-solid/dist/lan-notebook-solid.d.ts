import React from 'react';

export interface LanNotebookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotebookSolid(props: LanNotebookSolidProps): React.ReactElement;
export default LanNotebookSolid;
