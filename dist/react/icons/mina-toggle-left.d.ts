import React from 'react';

export interface MinaToggleLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaToggleLeft: React.FC<MinaToggleLeftProps>;
export default MinaToggleLeft;
