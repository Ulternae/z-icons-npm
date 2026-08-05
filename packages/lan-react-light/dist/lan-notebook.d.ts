import React from 'react';

export interface LanNotebookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotebook(props: LanNotebookProps): React.ReactElement;
export default LanNotebook;
