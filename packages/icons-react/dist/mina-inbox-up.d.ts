import React from 'react';

export interface MinaInboxUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInboxUp: React.FC<MinaInboxUpProps>;
export default MinaInboxUp;
