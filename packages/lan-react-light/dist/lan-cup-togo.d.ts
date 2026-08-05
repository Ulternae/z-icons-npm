import React from 'react';

export interface LanCupTogoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupTogo(props: LanCupTogoProps): React.ReactElement;
export default LanCupTogo;
