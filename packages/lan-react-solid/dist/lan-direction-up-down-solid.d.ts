import React from 'react';

export interface LanDirectionUpDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDirectionUpDownSolid(props: LanDirectionUpDownSolidProps): React.ReactElement;
export default LanDirectionUpDownSolid;
