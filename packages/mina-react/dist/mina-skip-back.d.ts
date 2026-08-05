import React from 'react';

export interface MinaSkipBackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSkipBack(props: MinaSkipBackProps): React.ReactElement;
export default MinaSkipBack;
