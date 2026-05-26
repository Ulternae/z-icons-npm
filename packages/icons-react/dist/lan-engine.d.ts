import React from 'react';

export interface LanEngineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEngine: React.FC<LanEngineProps>;
export default LanEngine;
