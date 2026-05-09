import React from 'react';

export interface MinaOptionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOption: React.FC<MinaOptionProps>;
export default MinaOption;
