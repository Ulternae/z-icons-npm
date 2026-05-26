import React from 'react';

export interface LanInputTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputText: React.FC<LanInputTextProps>;
export default LanInputText;
