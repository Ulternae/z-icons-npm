import React from 'react';

export interface LanMugSaucerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugSaucer(props: LanMugSaucerProps): React.ReactElement;
export default LanMugSaucer;
