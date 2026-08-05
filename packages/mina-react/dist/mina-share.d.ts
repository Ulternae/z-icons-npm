import React from 'react';

export interface MinaShareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShare(props: MinaShareProps): React.ReactElement;
export default MinaShare;
