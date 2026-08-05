import React from 'react';

export interface LanNotebookThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotebookThin(props: LanNotebookThinProps): React.ReactElement;
export default LanNotebookThin;
