import React from 'react';

export interface LanNotebookRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotebookRegular(props: LanNotebookRegularProps): React.ReactElement;
export default LanNotebookRegular;
