import React from 'react';

export interface Bru42GroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function Bru42Group(props: Bru42GroupProps): React.ReactElement;
export default Bru42Group;
