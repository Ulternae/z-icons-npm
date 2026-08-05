import React from 'react';

export interface LanCutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCut(props: LanCutProps): React.ReactElement;
export default LanCut;
