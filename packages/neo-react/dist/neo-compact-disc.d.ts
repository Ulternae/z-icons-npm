import React from 'react';

export interface NeoCompactDiscProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCompactDisc(props: NeoCompactDiscProps): React.ReactElement;
export default NeoCompactDisc;
