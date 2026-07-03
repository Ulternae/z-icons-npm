import React from 'react';

export interface BruUnrealEngineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUnrealEngine(props: BruUnrealEngineProps): React.ReactElement;
export default BruUnrealEngine;
