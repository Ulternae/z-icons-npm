import React from 'react';

export interface MinaInboxCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInboxCheck(props: MinaInboxCheckProps): React.ReactElement;
export default MinaInboxCheck;
