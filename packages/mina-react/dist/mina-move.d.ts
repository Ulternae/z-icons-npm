import React from 'react';

export interface MinaMoveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMove(props: MinaMoveProps): React.ReactElement;
export default MinaMove;
