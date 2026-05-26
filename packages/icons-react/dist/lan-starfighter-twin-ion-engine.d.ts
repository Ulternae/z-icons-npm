import React from 'react';

export interface LanStarfighterTwinIonEngineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarfighterTwinIonEngine: React.FC<LanStarfighterTwinIonEngineProps>;
export default LanStarfighterTwinIonEngine;
