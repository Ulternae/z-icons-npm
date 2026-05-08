import React from 'react';

export interface MinaLabelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLabelSolid: React.FC<MinaLabelSolidProps>;
export default MinaLabelSolid;
