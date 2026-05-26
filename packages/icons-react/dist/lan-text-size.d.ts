import React from 'react';

export interface LanTextSizeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextSize: React.FC<LanTextSizeProps>;
export default LanTextSize;
