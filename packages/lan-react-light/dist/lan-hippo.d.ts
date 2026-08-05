import React from 'react';

export interface LanHippoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHippo(props: LanHippoProps): React.ReactElement;
export default LanHippo;
