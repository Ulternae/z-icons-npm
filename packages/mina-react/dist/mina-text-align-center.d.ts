import React from 'react';

export interface MinaTextAlignCenterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTextAlignCenter(props: MinaTextAlignCenterProps): React.ReactElement;
export default MinaTextAlignCenter;
