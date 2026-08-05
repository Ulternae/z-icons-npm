import React from 'react';

export interface MinaLinkOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLinkOne(props: MinaLinkOneProps): React.ReactElement;
export default MinaLinkOne;
