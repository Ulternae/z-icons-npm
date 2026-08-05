import React from 'react';

export interface MinaInboxDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInboxDown(props: MinaInboxDownProps): React.ReactElement;
export default MinaInboxDown;
