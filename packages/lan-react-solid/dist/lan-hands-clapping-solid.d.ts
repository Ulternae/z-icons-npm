import React from 'react';

export interface LanHandsClappingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsClappingSolid(props: LanHandsClappingSolidProps): React.ReactElement;
export default LanHandsClappingSolid;
