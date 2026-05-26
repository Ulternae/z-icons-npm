import React from 'react';

export interface LanNotebookThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotebookThin: React.FC<LanNotebookThinProps>;
export default LanNotebookThin;
