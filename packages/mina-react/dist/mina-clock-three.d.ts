import React from 'react';

export interface MinaClockThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockThree(props: MinaClockThreeProps): React.ReactElement;
export default MinaClockThree;
