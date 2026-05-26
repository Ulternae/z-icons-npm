import React from 'react';

export interface LanNotebookRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotebookRegular: React.FC<LanNotebookRegularProps>;
export default LanNotebookRegular;
