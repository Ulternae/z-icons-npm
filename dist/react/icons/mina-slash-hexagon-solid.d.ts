import React from 'react';

export interface MinaSlashHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSlashHexagonSolid: React.FC<MinaSlashHexagonSolidProps>;
export default MinaSlashHexagonSolid;
