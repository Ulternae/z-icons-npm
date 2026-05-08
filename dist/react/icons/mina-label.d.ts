import React from 'react';

export interface MinaLabelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLabel: React.FC<MinaLabelProps>;
export default MinaLabel;
