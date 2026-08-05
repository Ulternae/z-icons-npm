import React from 'react';

export interface LanHandsBoundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsBoundSolid(props: LanHandsBoundSolidProps): React.ReactElement;
export default LanHandsBoundSolid;
