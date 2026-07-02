import React from 'react';

export interface CoreListOlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreListOl(props: CoreListOlProps): React.ReactElement;
export default CoreListOl;
