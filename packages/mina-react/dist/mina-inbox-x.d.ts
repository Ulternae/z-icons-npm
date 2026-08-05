import React from 'react';

export interface MinaInboxXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInboxX(props: MinaInboxXProps): React.ReactElement;
export default MinaInboxX;
