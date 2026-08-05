import React from 'react';

export interface MinaPrinterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPrinter(props: MinaPrinterProps): React.ReactElement;
export default MinaPrinter;
