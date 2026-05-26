import React from 'react';

export interface LanNotebookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotebook: React.FC<LanNotebookProps>;
export default LanNotebook;
