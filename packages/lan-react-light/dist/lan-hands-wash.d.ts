import React from 'react';

export interface LanHandsWashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsWash(props: LanHandsWashProps): React.ReactElement;
export default LanHandsWash;
