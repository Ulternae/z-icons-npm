import React from 'react';

export interface MinaRepeatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRepeat: React.FC<MinaRepeatProps>;
export default MinaRepeat;
