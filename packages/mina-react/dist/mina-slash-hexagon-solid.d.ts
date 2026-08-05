import React from 'react';

export interface MinaSlashHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSlashHexagonSolid(props: MinaSlashHexagonSolidProps): React.ReactElement;
export default MinaSlashHexagonSolid;
