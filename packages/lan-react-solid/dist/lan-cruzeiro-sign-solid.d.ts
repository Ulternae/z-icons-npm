import React from 'react';

export interface LanCruzeiroSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCruzeiroSignSolid(props: LanCruzeiroSignSolidProps): React.ReactElement;
export default LanCruzeiroSignSolid;
