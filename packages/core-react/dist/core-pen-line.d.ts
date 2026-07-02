import React from 'react';

export interface CorePenLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePenLine(props: CorePenLineProps): React.ReactElement;
export default CorePenLine;
