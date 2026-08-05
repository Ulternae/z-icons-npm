import React from 'react';

export interface LanHammerWarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerWar(props: LanHammerWarProps): React.ReactElement;
export default LanHammerWar;
