import React from 'react';

export interface MinaHomeCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHomeCheck(props: MinaHomeCheckProps): React.ReactElement;
export default MinaHomeCheck;
