import React from 'react';

export interface LanSignPostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignPostSolid(props: LanSignPostSolidProps): React.ReactElement;
export default LanSignPostSolid;
