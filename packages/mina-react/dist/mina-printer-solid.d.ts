import React from 'react';

export interface MinaPrinterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPrinterSolid(props: MinaPrinterSolidProps): React.ReactElement;
export default MinaPrinterSolid;
