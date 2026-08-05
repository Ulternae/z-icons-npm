import React from 'react';

export interface LanBlockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockSolid(props: LanBlockSolidProps): React.ReactElement;
export default LanBlockSolid;
