import React from 'react';

export interface MinaFilePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFilePlusSolid: React.FC<MinaFilePlusSolidProps>;
export default MinaFilePlusSolid;
