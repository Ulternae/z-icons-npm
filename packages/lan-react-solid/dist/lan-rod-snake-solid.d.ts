import React from 'react';

export interface LanRodSnakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRodSnakeSolid(props: LanRodSnakeSolidProps): React.ReactElement;
export default LanRodSnakeSolid;
