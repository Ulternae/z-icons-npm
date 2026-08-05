import React from 'react';

export interface LanFluteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlute(props: LanFluteProps): React.ReactElement;
export default LanFlute;
