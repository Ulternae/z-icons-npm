import React from 'react';

export interface LanNotebookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotebookSolid: React.FC<LanNotebookSolidProps>;
export default LanNotebookSolid;
