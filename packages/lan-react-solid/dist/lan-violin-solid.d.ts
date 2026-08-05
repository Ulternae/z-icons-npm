import React from 'react';

export interface LanViolinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanViolinSolid(props: LanViolinSolidProps): React.ReactElement;
export default LanViolinSolid;
