import React from 'react';

export interface LanHandsPrayingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsPraying(props: LanHandsPrayingProps): React.ReactElement;
export default LanHandsPraying;
