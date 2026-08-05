import React from 'react';

export interface LanPersonGolfingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonGolfing(props: LanPersonGolfingProps): React.ReactElement;
export default LanPersonGolfing;
