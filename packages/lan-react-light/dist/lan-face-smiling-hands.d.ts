import React from 'react';

export interface LanFaceSmilingHandsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmilingHands(props: LanFaceSmilingHandsProps): React.ReactElement;
export default LanFaceSmilingHands;
