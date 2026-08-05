import React from 'react';

export interface MinaConfigVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaConfigVertical(props: MinaConfigVerticalProps): React.ReactElement;
export default MinaConfigVertical;
