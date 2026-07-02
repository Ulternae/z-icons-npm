import React from 'react';

export interface CoreCompactDiscProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCompactDisc(props: CoreCompactDiscProps): React.ReactElement;
export default CoreCompactDisc;
