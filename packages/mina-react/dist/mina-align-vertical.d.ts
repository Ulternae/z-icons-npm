import React from 'react';

export interface MinaAlignVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlignVertical(props: MinaAlignVerticalProps): React.ReactElement;
export default MinaAlignVertical;
