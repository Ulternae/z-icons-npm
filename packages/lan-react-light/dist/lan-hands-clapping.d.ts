import React from 'react';

export interface LanHandsClappingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsClapping(props: LanHandsClappingProps): React.ReactElement;
export default LanHandsClapping;
