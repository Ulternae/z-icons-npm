import React from 'react';

export interface MinaFileXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFileX(props: MinaFileXProps): React.ReactElement;
export default MinaFileX;
