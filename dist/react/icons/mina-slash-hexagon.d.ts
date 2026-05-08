import React from 'react';

export interface MinaSlashHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSlashHexagon: React.FC<MinaSlashHexagonProps>;
export default MinaSlashHexagon;
