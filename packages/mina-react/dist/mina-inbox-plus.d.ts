import React from 'react';

export interface MinaInboxPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInboxPlus(props: MinaInboxPlusProps): React.ReactElement;
export default MinaInboxPlus;
