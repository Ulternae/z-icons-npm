import React from 'react';

export interface MinaHeadingSixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeadingSix(props: MinaHeadingSixProps): React.ReactElement;
export default MinaHeadingSix;
