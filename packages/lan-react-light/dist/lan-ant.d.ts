import React from 'react';

export interface LanAntProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnt(props: LanAntProps): React.ReactElement;
export default LanAnt;
