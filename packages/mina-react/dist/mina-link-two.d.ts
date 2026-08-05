import React from 'react';

export interface MinaLinkTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLinkTwo(props: MinaLinkTwoProps): React.ReactElement;
export default MinaLinkTwo;
