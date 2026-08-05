import React from 'react';

export interface LanChurchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChurchSolid(props: LanChurchSolidProps): React.ReactElement;
export default LanChurchSolid;
