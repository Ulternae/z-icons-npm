import React from 'react';

export interface LanCircleLariSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleLariSolid(props: LanCircleLariSolidProps): React.ReactElement;
export default LanCircleLariSolid;
