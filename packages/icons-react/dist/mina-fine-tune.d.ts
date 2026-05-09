import React from 'react';

export interface MinaFineTuneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFineTune: React.FC<MinaFineTuneProps>;
export default MinaFineTune;
