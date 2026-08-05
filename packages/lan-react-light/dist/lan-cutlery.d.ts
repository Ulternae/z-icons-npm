import React from 'react';

export interface LanCutleryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCutlery(props: LanCutleryProps): React.ReactElement;
export default LanCutlery;
