import React from 'react';

export interface MinaFolderMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderMinusSolid: React.FC<MinaFolderMinusSolidProps>;
export default MinaFolderMinusSolid;
