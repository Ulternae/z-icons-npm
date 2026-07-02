import React from 'react';

export interface CoreLinkSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLinkSimple(props: CoreLinkSimpleProps): React.ReactElement;
export default CoreLinkSimple;
