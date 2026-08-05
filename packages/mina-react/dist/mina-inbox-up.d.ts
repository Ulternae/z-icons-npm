import React from 'react';

export interface MinaInboxUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInboxUp(props: MinaInboxUpProps): React.ReactElement;
export default MinaInboxUp;
