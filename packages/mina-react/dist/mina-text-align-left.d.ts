import React from 'react';

export interface MinaTextAlignLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTextAlignLeft(props: MinaTextAlignLeftProps): React.ReactElement;
export default MinaTextAlignLeft;
