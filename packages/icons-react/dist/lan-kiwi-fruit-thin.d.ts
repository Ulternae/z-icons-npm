import React from 'react';

export interface LanKiwiFruitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKiwiFruitThin: React.FC<LanKiwiFruitThinProps>;
export default LanKiwiFruitThin;
