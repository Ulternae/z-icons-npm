import React from 'react';

export interface MinaMoveVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMoveVertical(props: MinaMoveVerticalProps): React.ReactElement;
export default MinaMoveVertical;
