import React from 'react';

export interface LanPersonWalkingLuggageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonWalkingLuggage(props: LanPersonWalkingLuggageProps): React.ReactElement;
export default LanPersonWalkingLuggage;
