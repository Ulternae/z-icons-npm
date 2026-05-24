import React from 'react';

export interface BruUnrealEngineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUnrealEngine: React.FC<BruUnrealEngineProps>;
export default BruUnrealEngine;
