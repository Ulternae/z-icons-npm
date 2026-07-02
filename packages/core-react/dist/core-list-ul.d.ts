import React from 'react';

export interface CoreListUlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreListUl(props: CoreListUlProps): React.ReactElement;
export default CoreListUl;
