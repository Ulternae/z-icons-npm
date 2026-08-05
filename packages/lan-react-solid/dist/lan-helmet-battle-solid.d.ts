import React from 'react';

export interface LanHelmetBattleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelmetBattleSolid(props: LanHelmetBattleSolidProps): React.ReactElement;
export default LanHelmetBattleSolid;
