import React from 'react';

export interface LanSprayCanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSprayCan(props: LanSprayCanProps): React.ReactElement;
export default LanSprayCan;
