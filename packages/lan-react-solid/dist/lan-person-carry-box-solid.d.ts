import React from 'react';

export interface LanPersonCarryBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCarryBoxSolid(props: LanPersonCarryBoxSolidProps): React.ReactElement;
export default LanPersonCarryBoxSolid;
