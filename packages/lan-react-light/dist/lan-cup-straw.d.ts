import React from 'react';

export interface LanCupStrawProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupStraw(props: LanCupStrawProps): React.ReactElement;
export default LanCupStraw;
