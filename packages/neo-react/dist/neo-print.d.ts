import React from 'react';

export interface NeoPrintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPrint(props: NeoPrintProps): React.ReactElement;
export default NeoPrint;
