import React from 'react';

export interface MinaSlashHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSlashHexagon(props: MinaSlashHexagonProps): React.ReactElement;
export default MinaSlashHexagon;
