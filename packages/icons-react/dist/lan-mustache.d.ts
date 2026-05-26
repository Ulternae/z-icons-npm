import React from 'react';

export interface LanMustacheProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMustache: React.FC<LanMustacheProps>;
export default LanMustache;
