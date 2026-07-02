import React from 'react';

export interface CorePrintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePrint(props: CorePrintProps): React.ReactElement;
export default CorePrint;
